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
  async (params) => {
    const response = await apartmentsApi.get(`contract?aptno=${params.aptno}&term=${params.term}`);
    return response.data;
  },
);

export const fetchAsyncApartmentsRank = createAsyncThunk(
  'apartments/fetchAsyncApartmentsRank',
  async () => {
    const response = await apartmentsApi.get('apartments/rank');
    return response.data;
  },
);

export const fetchAsyncApartmentsSubscription = createAsyncThunk(
  'apartments/fetchAsyncApartmentsSubscription',
  async () => {
    const response = await apartmentsApi.get('apartments/subscription');
    return response.data;
  },
);

const initialState = {
  apartments: {},
  selectApartments: {},
  selectContract: {},
  selectRank: {},
  selectSubscription: {},
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
    [fetchAsyncApartmentsRank.fulfilled]: (state, { payload }) => {
      return { ...state, selectRank: payload };
    },
    [fetchAsyncApartmentsSubscription.fulfilled]: (state, { payload }) => {
      return { ...state, selectSubscription: payload };
    },
  },
});

export const getAllApartments = (state) => state.reducerName.apartments; //state.reducerName.apartments : 리듀서 이름.초기값state이름
export const getApartmentsDetail = (state) => state.reducerName.selectApartments;
export const getApartmentsContract = (state) => state.reducerName.selectContract;
export const getApartmentsRank = (state) => state.reducerName.selectRank;
export const getApartmentsSubscription = (state) => state.reducerName.selectSubscription;

export default slice.reducer;
