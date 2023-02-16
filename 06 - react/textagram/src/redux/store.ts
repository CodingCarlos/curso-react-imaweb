import { configureStore } from "@reduxjs/toolkit";

import posts from "./postSlice";
import users from "./userSlice";

export const store = configureStore({
    reducer: {
        posts,
        users,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
