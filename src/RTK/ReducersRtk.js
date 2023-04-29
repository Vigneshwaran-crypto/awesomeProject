import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {GET_API_DATA, HTTP, StaticValues} from '../Common/Constants';
import {LOG, Toast} from '../Common/utils';
import {getSingleUser} from './RtkActions';

// const getState = createAsyncThunk({getState});

const axios = require('axios').default;

export const apiCall = createAsyncThunk(
  GET_API_DATA,
  async (action, {rejectWithValue, getState, dispatch}) => {
    console.group(
      '%cGET_API_DATA_CREATE_ASYNC_THUNK 📌️',
      'color:#E14D2A;font-size:11px',
    );
    console.log(action);
    console.groupEnd();

    try {
      let header = {};

      if (action.noAuth) {
        header = HTTP.HEADERS;
      } else {
        if (action.multipart) {
          header = HTTP.formDataHeader;
        } else {
          header = HTTP.AuthHeader;
        }
      }

      //default method for network call
      let method = 'post';
      if (action.get) {
        method = 'get';
      }

      const config = {
        method: method,
        url: action.requestUrl.trim(),
        data: action.multipart
          ? action.jsonData
          : JSON.stringify(action.jsonData),
        headers: header,
      };

      console.group(
        '%cNetwork Call Config 📡️',
        'color:#19376D;font-size:10px',
      );
      LOG(config);
      console.groupEnd();

      const apiResponse = await axios(config, {timeout: 2});

      console.group('%cRESPONSE GOD 🌈️:', 'color:black;font-size:11px');
      LOG('Response Data :', apiResponse.data);
      LOG('Response Status :', apiResponse.status);
      console.groupEnd();

      switch (action.requestType) {
        case StaticValues.getUserDetails:
          if (apiResponse.status == 200) {
            dispatch(apiCall(getSingleUser()));
          }
          break;

        default:
          console.warn('DEFAULT SWITCH IN MIDDLEWARE');
          break;
      }

      return {
        jsonData: apiResponse.data,
        status: apiResponse.status,
        requestType: action.requestType,
        state: getState(),
      };
    } catch (err) {
      LOG('API DATA ERROR----------🔴️:', err);

      if (err.response.status == 404) {
        Toast('Some Thing Went Wrong');
      }
    }
  },
);

const initialState = {
  products: [],
  loading: false,
  apiError: null,
  userDetails: [],
  singleUser: {},
};

const RtkSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder.addCase(apiCall.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(apiCall.fulfilled, (state, action) => {
      // LOG('RESPONSE SAVED IN STORE :', action);
      state.loading = false;

      switch (action.payload.requestType) {
        case StaticValues.getAllProducts:
          LOG('GET ALL PRODUCTS IN REDUCER :', action.payload);
          state.products = action.payload.jsonData;
          break;

        case StaticValues.getUserDetails:
          // LOG('GET USER DETAILS IN REDUCER :', action.payload);
          state.userDetails = action.payload.jsonData;
          break;

        case StaticValues.getSingleUser:
          // LOG('GET SINGLE USER IN REDUCER :', action.payload);
          state.singleUser = action.payload.jsonData;
          break;

        default:
          console.warn('DEFAULT SWITCH CASE IN FULFILLED');
          break;
      }
      console.log('STORE_STATE :', action.payload.state);
    });

    builder.addCase(apiCall.rejected, (state, action) => {
      (state.loading = false), (state.apiError = action.payload.jsonData);
    });
  },
});

const RtkReducer = RtkSlice.reducer;

export default RtkReducer;

// const dummyReducer = createSlice({
//   name:"dummyRed",
//   initialState,
//   extraReducers: (builder)=>{

//     builder.addCase(apiCall.pending,(state,action)=>{

//     });

//     builder.addCase(apiCall.fulfilled,(state,action)=>{

//     })

//   }
// })
