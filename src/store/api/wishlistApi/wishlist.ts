import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface WishlistProduct {
  id: number;
  productName: string;
  price: number;
  discountPrice?: number;
  image: string;
  categoryId?: number;
}

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store-api.softclub.tj/',
  }),
  endpoints: (builder) => ({
    getWishlist: builder.query<WishlistProduct[], void>({
      query: () => '/Product/get-products',
      transformResponse: (response: any): WishlistProduct[] => {
        return response.products || [];
      },
    }),
  }),
});

export const { useGetWishlistQuery } = wishlistApi;