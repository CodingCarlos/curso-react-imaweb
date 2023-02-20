import { INewPost, IPost } from "../../interfaces";
import { api } from "./api";

interface QueryObject {
    orden?: string;
    limite?: number;
};

interface ResponsePorDefecto {
    data: { result: IPost[] };
};

const apiConPost = api.injectEndpoints({
    endpoints: (builder) => ({
        listarPosts: builder.query<IPost[], QueryObject>({
            query: (name) => '/post',
            // query: (query) => `/post${query.orden ? `?orderBy=${query.orden}` : '' }`,
            // query: (queryParams) => {
            //     let url = '/post';
            //     if (queryParams) {
            //         url += '?'
            //         if (queryParams.orden) {
            //             url += `orderBy=${queryParams.orden}`;
            //         }
            //         // ...
            //     }
            //     return url;
            // },
            keepUnusedDataFor: 30,
            // transformResponse: (response: ResponsePorDefecto): IPost[] => {
            transformResponse: (response: IPost[]): IPost[] => {
                // return response.data.result;
                console.log('response', response);
                return response.sort((a, b) => {
                    if (a.usuario.name < b.usuario.name) {
                        return 1
                    }
                    if (a.usuario.name > b.usuario.name) {
                        return -1;
                    }
                    return 0;
                });
            }
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

export const useListarPostsQueryRefetchOnFocus = (queryParams: QueryObject) => {
    return apiConPost.useListarPostsQuery(queryParams, {
        refetchOnFocus: true,
    });
}

export const endpoints = apiConPost.endpoints;
