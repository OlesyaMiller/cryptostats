import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { usersApi } from '../apis/users.api';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
