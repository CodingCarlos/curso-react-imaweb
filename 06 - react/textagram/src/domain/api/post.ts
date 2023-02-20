import { INewPost, IPost } from "../../interfaces";
import { api } from "./api";

const apiConPost = api.injectEndpoints({
    endpoints: (builder) => ({
        listarPosts: builder.query<IPost[], void>({
            query: (name) => '/post',
            keepUnusedDataFor: 30, 
        }),
        anadirPost: builder.query<IPost, INewPost>({
            query: (nuevoPost) => ({
                url: '/post',
                method: 'POST',
                body: JSON.stringify(nuevoPost),
            }),
        }),
        traerPost: builder.query<IPost, string>({
            query: (id) => `/post/${id}`,
        }),
    }),
});

export const {
    useListarPostsQuery,
    useAnadirPostQuery,
    useTraerPostQuery,
} = apiConPost;

export const useListarPostsQueryRefetchOnFocus = () => {
    return apiConPost.useListarPostsQuery(undefined, {
        refetchOnFocus: true,
    });
}

export const endpoints = apiConPost.endpoints;
