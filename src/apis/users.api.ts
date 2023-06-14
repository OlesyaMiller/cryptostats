import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/User";
import { CreateUserRequestDto } from "../dtos/create-user-request.dto";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: '/users'
    }),
    endpoints: (build) => ({
        createUser: build.mutation<User, CreateUserRequestDto>({
            query: (createUserRequestDto) => ({
                url: '/',
                method: 'POST',
                body: createUserRequestDto,
            }),
        }),
    }),
});

export const { useCreateUserMutation } = usersApi;