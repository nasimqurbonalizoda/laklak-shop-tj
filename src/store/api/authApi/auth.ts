import { baseApi } from '../../../utility/api';

interface AuthResponse<T = any> {
  data: T;
  message?: string;
  success?: boolean;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<
      AuthResponse<{ token: string }>, 
      { userName: string; phoneNumber: string; email: string; password: string; confirmPassword: string }>({
      query: (body) => ({
        url: '/Account/register',
        method: 'POST',
        body,
      }),
    }),
    
    login: build.mutation<AuthResponse<string>, { userName: string; password: string }>({
      query: (body) => ({
        url: '/Account/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
