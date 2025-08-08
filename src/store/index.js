import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
  // Add middleware customization if needed in future
});

export default store;

