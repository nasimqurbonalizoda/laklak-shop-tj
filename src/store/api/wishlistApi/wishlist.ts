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
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://store-api.softclub.tj/api",
  }),
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({
    getWishlist: builder.query<any, void>({
      query: () => "/wishlist",
      providesTags: ["Wishlist"],
    }),
  }),
});

export const { useGetWishlistQuery,} = wishlistApi;

