import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequest } from '../dtos/login-request.dto';
import { User } from '../models/User';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/auth'
    }),
    endpoints: (build) => ({
        login: build.mutation<User, LoginRequest>({  
            query: (loginRequestDto: any) => ({
                url: '/login',
                method: 'POST',
                body: loginRequestDto,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;