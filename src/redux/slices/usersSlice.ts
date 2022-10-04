import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store";

interface Photo {
  id: number;
  name: string;
  imgURL: string;
  likes: number;
  date: string;
  avatar: string;
  username: string;
  bio: string;
  total: number;
  link: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface UsersSliceState {
  users: Photo[];
  status: Status;
}

const initialState: UsersSliceState = {
  users: [],
  status: Status.LOADING,
}

export const fetchUsers = createAsyncThunk('fetchUsers', async (page: number) => {
  const { data } = await axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=4&client_id=STdsYhvvu_8oWLgrHOodAi_0-Dnb0vW-wVcdLMU1l4U`);

  const loadedPhotos: Photo[] = []

  for(const key in data) {
    loadedPhotos.push({
      id: data[key].id,
      name: data[key].user.first_name + (data[key].user.last__name ? ` ${data[key].user.last__name}` : ''),
      imgURL: data[key].urls.regular,
      likes: data[key].likes,
      date: data[key].created_at.slice(0, 10),
      avatar: data[key].user.profile_image.large,
      username: data[key].user.instagram_username ? data[key].user.instagram_username : '',
      bio: data[key].user.bio,
      total: data[key].user.total_photos,
      link: data[key].user.links.html
    })
  }

  return loadedPhotos;
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPhotos(state, action) {
      state.users = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.users = [...state.users, ...action.payload];
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = Status.ERROR;
        state.users = [];
      })
  }
})

export const selectUsers = (state: RootState) => state.users;
export const selectStatus = (state: RootState) => state.users.status;

export default usersSlice.reducer