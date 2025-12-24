import { baseApi } from '../../../utility/api';

export interface SubCategory {
  id: number;
  subCategoryName: string;
}

export interface Category {
  id: number;
  categoryName: string;
  categoryImage: string;
  subCategories: SubCategory[];
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/Category/get-categories',
      transformResponse: (response: any): Category[] => {
        return response.data || [];
      },
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;