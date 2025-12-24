import { baseApi } from '../../../utility/api'; 

export interface CartProduct {
  id: number;
  quantity: number;
  product: {
    id: number;
    productName: string;
    price: number;
    image: string;
  };
}

export interface CartResponse {
  productsInCart: CartProduct[];
}

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getCart: build.query<CartResponse[], void>({
      query: () => '/Cart/get-products-from-cart',
      providesTags: ['Cart'],
    }),

    addToCart: build.mutation<void, number>({
      query: (id) => ({
        url: `/Cart/add-product-to-cart?id=${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Cart'],
    }),

    increaseQuantity: build.mutation<void, number>({
      query: (id) => ({
        url: `/Cart/increase-product-in-cart?id=${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Cart'],
    }),

    decreaseQuantity: build.mutation<void, number>({
      query: (id) => ({
        url: `/Cart/reduce-product-in-cart?id=${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Cart'],
    }),

    removeFromCart: build.mutation<void, number>({
      query: (id) => ({
        url: `/Cart/delete-product-from-cart?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),

    clearCart: build.mutation<void, void>({
      query: () => ({
        url: '/Cart/clear-cart',
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),

  }),
});

export const {useGetCartQuery,useAddToCartMutation,useIncreaseQuantityMutation,
  useDecreaseQuantityMutation,useRemoveFromCartMutation,useClearCartMutation,} = cartApi;