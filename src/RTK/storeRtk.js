import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import randomReducer from './RandomReduer';
import RtkReducer from './ReducersRtk';
const logger = require('redux-logger').createLogger();

const store = configureStore({
  reducer: {
    products: RtkReducer,
    random: randomReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;

// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
