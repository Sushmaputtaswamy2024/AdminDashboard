import {configeureStore} from '@reduxjs/toolkit';

import authReducer from './conentFile';

const store = configeureStore({
  reducer: {
    adminDashboard: authReducer,
  },
});