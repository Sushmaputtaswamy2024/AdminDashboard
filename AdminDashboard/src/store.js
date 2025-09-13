import { configureStore } from '@reduxjs/toolkit';
import authReducer from './conentFile';

const store = configureStore({
  reducer: {
    adminDashboard: authReducer,
  },
});

export default store; 
