import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces";
import { getPosts as getPostsService, addPost as addPostService } from '../services/post';

export interface PostState {
    list: IPost[];
    loading: boolean;
};

const initialState: PostState = {
    list: [],
    loading: false,
};

export const getPostsAction = createAsyncThunk('posts/getPosts', async () => {
    const list = await getPostsService();
    return list;
});

// getPostsService().then(() => {
//     postSlice.actions.addPost()
// })

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
            state.loading = true;
        })
        builder.addCase(getPostsAction.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
    }
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
