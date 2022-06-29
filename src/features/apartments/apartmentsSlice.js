import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apartmentsApi from '../../common/api'

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', // 액션 이름
    async (term) => {
      const response = await apartmentsApi.get(
        `?s=${term}&type=movie`,
      );
      return response.data;
    },
);

const initialState = {
    apartments: {}
};


const apartmentsSlice = createSlice({
    name: 'apartments',
    initialState,
});