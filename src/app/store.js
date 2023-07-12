import { configureStore } from '@reduxjs/toolkit';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
