import { baseApi } from '../../utility/api';

interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}
export interface Product {
  id: number
  productName: string
  price: number
  discountPrice: number
  image: string
  categoryId: number
}



export interface GetProductsResponse {
  products: Product[]
  colors: any[]
  brands: any[]
  minMaxPrice: {
    minPrice: number
    maxPrice: number
  }
}

export interface ProductQueryParams {
  PageNumber?: number
  PageSize?: number
  CategoryId?: number
  BrandId?: number
  MinPrice?: number
  MaxPrice?: number
}


export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ApiResponse<GetProductsResponse>,ProductQueryParams>({
      query: (params) => ({
        url: '/Product/get-products',
        params,
      }),
      providesTags: ['Product'],
    }),
    getProductById: build.query<Product, number>({
      query: (id) => `/Product/get-product-by-id?id=${id}`,
      providesTags: ['Product'],
    }),
  }),
})

export const { useGetProductsQuery,useGetProductByIdQuery } = productApi;

