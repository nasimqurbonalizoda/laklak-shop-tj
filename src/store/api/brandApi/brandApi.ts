import { baseApi } from '../../../utility/api'; 

export interface Brand {
  id: number;
  brandName: string;
  brandImage?: string; 
}
export interface BrandsResponse {
  data: Brand[];
  totalRecord: number;
  pageNumber: number;
  pageSize: number;
  totalPage: number;
}

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<Brand[], void>({
      query: () => '/Brand/get-brands', 
      transformResponse: (response: BrandsResponse): Brand[] => {
        return response.data || [];
      },
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetBrandsQuery } = brandApi;