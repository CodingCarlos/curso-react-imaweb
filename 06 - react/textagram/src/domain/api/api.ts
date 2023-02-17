import { apiUrl } from '../../services/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../interfaces';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }),
    keepUnusedDataFor: 30,
    refetchOnFocus: true,
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: (name) => '/post',
        }),
    }),
});

export const { useGetPostsQuery } = api;
