import {LOG} from '../Common/utils';

const {createSlice} = require('@reduxjs/toolkit');
const {apiCall} = require('./ReducersRtk');

const initialState = {
  loading: false,
  name: 'vigneshwaran',
};

const random = createSlice({
  name: 'random',
  initialState,
  extraReducers: builder => {
    builder.addCase(apiCall.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(apiCall.fulfilled, (state, action) => {
      //   LOG('fulfilled in random reducer :', action);
      state.loading = false;
      state.name = 'Durga';
    });

    builder.addCase(apiCall.rejected, (state, action) => {
      state.loading = false;
      state.name = 'rejected';
    });
  },
});

const randomReducer = random.reducer;

export default randomReducer;
