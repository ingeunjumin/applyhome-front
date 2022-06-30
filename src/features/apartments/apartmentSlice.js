import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apartmentsApi from '../../common/api';

export const fetchAsyncApartments = createAsyncThunk(
  'apartments/fetchAsyncApartments', // 액션 이름
  async () => {
    const response = await apartmentsApi.get(`?type=apartments`);
    return response.data;
  },
);

const initialState = {
  apartments: {},
};

const slice = createSlice({
  name: 'applyhome',
  initialState,
  //reducers는 내부에서 진행되는 action 및 동기 action을 넣는 공간.
  reducers: {},
  //extraReducers optional이고 외부/비동기 action을 넣는 공간.
  extraReducers: {
    [fetchAsyncApartments.fulfilled]: (state, { payload }) => {
      return { ...state, apartments: payload };
    },
  },
});

export const getAllApartments = (state) => state.reducerName.apartments; //state.reducerName.apartments : 리듀서 이름.초기값state이름
export default slice.reducer;
