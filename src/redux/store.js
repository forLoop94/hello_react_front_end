import { configureStore } from '@reduxjs/toolkit';
import greetingSliceReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSliceReducer,
  },
});

export default store;
