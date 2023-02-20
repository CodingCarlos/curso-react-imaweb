import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUsuario } from "../interfaces";
import { addUser, getUsers } from "../services/user";

interface UserState {
    list: IUsuario[]
};

const initialState: UserState = {
    list: [],
};

export const getUsersAction = createAsyncThunk('user/getUsers', async () => {
    return await getUsers();
});

export const addUserAction = createAsyncThunk('user/addUser', async (newUser: IUsuario) => {
    return await addUser(newUser);
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersAction.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(addUserAction.fulfilled, (state, action) => {
            state.list.push(action.payload);
        });
    }
})


export default userSlice.reducer;