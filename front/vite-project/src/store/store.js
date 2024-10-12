import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

//CONFIGURACIÓN DEL STORE

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
