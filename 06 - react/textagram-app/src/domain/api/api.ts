import { apiUrl } from '../../services/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }),
    keepUnusedDataFor: 30,
    // refetchOnFocus: true,
    endpoints: (builder) => ({}),
});
