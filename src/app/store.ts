import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { usersApi } from '../apis/users.api';
import { authApi } from '../apis/auth.api';
import auth from '../slices/auth.slice'
import { coinbaseApi } from '../apis/coinbase.api';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [coinbaseApi.reducerPath]: coinbaseApi.reducer,
    counter: counterReducer,
    auth,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(authApi.middleware)
      .concat(coinbaseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
