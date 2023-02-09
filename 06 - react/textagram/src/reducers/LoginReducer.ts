import { Reducer } from "react";
import { IUsuario } from "../interfaces";

export enum LoginReducerActions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
};

export type LoginReducerState = IUsuario | null;
export interface LoginReducerDispatcher {
    type?: LoginReducerActions;
    payload?: IUsuario;
};
export type LoginReducerType = Reducer<LoginReducerState, LoginReducerDispatcher>;

const reducer = (state: LoginReducerState = null, action: LoginReducerDispatcher = {}): LoginReducerState => {
    switch (action.type) {
        case LoginReducerActions.LOGIN: 
            // Hacer mis comprobaciones o gestiones
            if (!action.payload) {
                return state;
            }

            return action.payload;

        case LoginReducerActions.LOGOUT: 
            return null;
        
        default: 
            return state;
    }
}

export default reducer;
