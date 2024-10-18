import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/User";
import { CreateUserRequest } from "../dtos/create-user-request.dto";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: '/users'
    }),
    endpoints: (build) => ({
        createUser: build.mutation<User, CreateUserRequest>({
            query: (createUserRequestDto) => ({
                url: '/',
                method: 'POST',
                body: createUserRequestDto,
            }),
        }),
        getUser: build.query<User, undefined>({
            query: () => ({ url: "/" }),
        }),
    }),
    
});

export const { useCreateUserMutation, useGetUserQuery } = usersApi;