import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { filterPhotosProperties } from '../utils/filterPhotosProperties';
import { Photo, SearchResponseType } from './types';

export const fetchPhotos = createAsyncThunk('fetchPhotos', async (page: number) => {
  const { data: photos }: AxiosResponse<{ data: Photo[] }> = await axios({
    method: 'GET',
    url: `https://api.unsplash.com/photos`,
    headers: {
      Authorization: 'Client-ID STdsYhvvu_8oWLgrHOodAi_0-Dnb0vW-wVcdLMU1l4U',
    },
    params: {
      page,
      per_page: 6,
      order_by: 'popular',
    },
  });
  return filterPhotosProperties(photos);
});

export const searchPhotos = createAsyncThunk(
  'searchPhotos',
  async ({ page, query }: { page: number; query: string }) => {
    const { data }: AxiosResponse<SearchResponseType> = await axios({
      method: 'GET',
      url: `https://api.unsplash.com/search/photos`,
      headers: {
        Authorization: 'Client-ID STdsYhvvu_8oWLgrHOodAi_0-Dnb0vW-wVcdLMU1l4U',
      },
      params: {
        query,
        page,
        per_page: 6,
      },
    });

    const result = {
      ...data,
      results: filterPhotosProperties(data.results),
    };

    return result;
  },
);
