import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from '../domain/api/api';

import posts from "./postSlice";
import users from "./userSlice";

export const store = configureStore({
    reducer: {
        posts,
        users,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});

// Esto es opcional, y solo para algunas funcionalidades.
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
