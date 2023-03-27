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
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface PhotosSliceState {
  photos: Photo[];
  status: Status;
}

const initialState: PhotosSliceState = {
  photos: [],
  status: Status.LOADING,
}

export const fetchPhotos = createAsyncThunk('fetchPhotos', async (page: number) => {
  const { data } = await axios.get(`https://api.unsplash.com/photos/?page=${page}&per_page=6&client_id=STdsYhvvu_8oWLgrHOodAi_0-Dnb0vW-wVcdLMU1l4U`);

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
      total: data[key].user.total_photos
    })
  }

  return loadedPhotos;
})





const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    findPhoto(state, action) {
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.photos = [...state.photos, ...action.payload];
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.status = Status.ERROR;
        state.photos = [];
      })
  }
})

export const selectPhotos = (state: RootState) => state.photos.photos;
export const selectStatus = (state: RootState) => state.photos.status;

export default photosSlice.reducer