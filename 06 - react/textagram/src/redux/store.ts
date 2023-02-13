import { configureStore } from "@reduxjs/toolkit";

// import { postSlice } from "./postSlice";
import posts from "./postSlice";

export const store = configureStore({
    reducer: {
        // posts: postSlice.reducer,
        posts,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
