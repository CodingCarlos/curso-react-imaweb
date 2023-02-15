import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces";
import { ApiState } from "../interfaces/api-state";
import { getPosts as getPostsService, addPost as addPostService } from '../services/post';

export interface PostState {
    list: IPost[];
    loading: ApiState;
    retries: number;
};

const initialState: PostState = {
    list: [],
    loading: ApiState.IDDLE,
    retries: 0,
};

export const getPostsAction = createAsyncThunk('posts/getPosts', async () => {
    const list = await getPostsService();
    return list;
});

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // getPosts: (state) => {
        //     state.list = getPostsService();
        // },
        addPost: (state, action: PayloadAction<IPost>) => {
            const newPost = action.payload;
            addPostService(newPost);
            state.list = [newPost, ...state.list];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPostsAction.pending, (state) => {
            state.loading = ApiState.LOADING;
        })
        builder.addCase(getPostsAction.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = ApiState.SUCCESS;
        })
        builder.addCase(getPostsAction.rejected, (state, action) => {
            console.log(action.error.message);
            state.loading = ApiState.FAILED;
            state.retries += 1;
        })
    }
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
