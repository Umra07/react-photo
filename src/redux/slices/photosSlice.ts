import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchPhotos, searchPhotos } from '../async';
import { InitialStateType, Status } from '../types';

const initialState: InitialStateType = {
  photos: [],
  page: 1,
  status: Status.LOADING,
  searchQuery: '',
  searchResult: {
    total: 0,
    total_pages: 0,
    results: [],
  },
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    searchQuerySetted(state, action) {
      state.searchQuery = action.payload;
    },
    pageChanged(state, action) {
      state.page = action.payload;
    },
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
      .addCase(searchPhotos.pending, (state) => {
        state.status = Status.LOADING;
        state.photos = [];
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        if (state.page > 1) {
          state.searchResult.results = [...state.searchResult.results, ...action.payload.results];
        } else {
          state.searchResult = action.payload;
        }
      })
      .addCase(searchPhotos.rejected, (state) => {
        state.status = Status.ERROR;
        state.photos = [];
      });
  },
});

export const selectPhotos = (state: RootState) => state.photos.photos;
export const selectSearchQuery = (state: RootState) => state.photos.searchQuery;
export const selectSearchResult = (state: RootState) => state.photos.searchResult;
export const selectLoadingStatus = (state: RootState) => state.photos.status;
export const selectPage = (state: RootState) => state.photos.page;

export const { searchQuerySetted, pageChanged } = photosSlice.actions;

export default photosSlice.reducer;
