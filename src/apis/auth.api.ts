import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequestDto } from '../dtos/login-request.dto';
import { User } from '../models/User';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/auth'
    }),
    endpoints: (build) => ({
        login: build.mutation<User, LoginRequestDto>({
            query: (loginRequestDto) => ({
                url: '/login',
                method: 'POST',
                body: loginRequestDto,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;