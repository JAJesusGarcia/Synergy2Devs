// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Estado inicial del usuario al iniciar la aplicación, lo obtengo del localStorage
  user: (() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser === null || storedUser === undefined) {
      return null;
    }
    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  })(),
  userAppointments: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    setUserAppointments(state, action) {
      state.userAppointments = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.userAppointments = [];
      localStorage.removeItem('user');
    },
    addUserAppointment(state, action) {
      state.userAppointments.push(action.payload);
    },
  },
});

export const { setUser, setUserAppointments, clearUser, addUserAppointment } =
  userSlice.actions;
export default userSlice.reducer;
