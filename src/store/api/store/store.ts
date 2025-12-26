import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../../utility/api';
import { wishlistApi } from '../wishlistApi/wishlist';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(baseApi.middleware)
  .concat(wishlistApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
