import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/User";
import { CreateUserDto } from "../dtos/createUserDto.dto";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: '/users'
    }),
    endpoints: (build) => ({
        createUser: build.mutation<User, CreateUserDto>({
            query: (createUserDto) => ({
                url: '/',
                method: 'POST',
                body: createUserDto,
            }),
        }),
    }),
});

export const { useCreateUserMutation } = usersApi;