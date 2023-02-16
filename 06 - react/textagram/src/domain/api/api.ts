import { apiUrl } from '../../services/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../interfaces';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }),
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => '/post',
        }),
    }),
});

export const { useGetPostsQuery } = api;
