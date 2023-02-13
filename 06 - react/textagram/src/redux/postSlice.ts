import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces";
import { getPosts as getPostsService, addPost as addPostService } from '../services/post';

export interface PostState {
    list: IPost[];
};

const initialState: PostState = {
    list: [],
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.list = getPostsService();
        },
        addPost: (state, action: PayloadAction<IPost>) => {
            const newPost = action.payload;
            addPostService(newPost);
            state.list = [newPost, ...state.list];
        },
    },
});

export const { getPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
