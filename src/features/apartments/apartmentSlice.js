import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apartmentsApi from '../../common/api';

export const fetchAsyncApartments = createAsyncThunk(
  'apartments/fetchAsyncApartments', // 액션 이름
  async () => {
    const response = await apartmentsApi.get(`?type=apartments`);
    return response.data;
  },
);

export const fetchAsyncApartmentsDetail = createAsyncThunk(
  'apartments/fetchAsyncApartmentsDetail',
  async (aptno) => {
    const response = await apartmentsApi.get(`apartments?aptno=${aptno}`);
    return response.data;
  },
);

export const fetchAsyncApartmentsContract = createAsyncThunk(
  'apartments/fetchAsyncApartmentsContract',
  async (aptno) => {
    const response = await apartmentsApi.get(`apartments/contract?aptno=${aptno}&term=3}`);
    return response.data;
  },
);

const initialState = {
  apartments: {},
  selectApartments: {},
  selectContract: {},
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
    [fetchAsyncApartmentsDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectApartments: payload };
    },
    [fetchAsyncApartmentsContract.fulfilled]: (state, { payload }) => {
      return { ...state, selectContract: payload };
    },
  },
});

export const getAllApartments = (state) => state.reducerName.apartments; //state.reducerName.apartments : 리듀서 이름.초기값state이름
export const getApartmentsDetail = (state) => state.reducerName.selectApartments;
export const getApartmentsContract = (state) => state.reducerName.selectContract;

export default slice.reducer;
