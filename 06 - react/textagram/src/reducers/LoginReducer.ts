import { IUsuario } from "../interfaces";

export type LoginReducerState = IUsuario | null;
export interface LoginReducerDispatcher {
    type: string;
    payload?: IUsuario;
};

const reducer = (state: IUsuario | null = null, action: LoginReducerDispatcher = { type: '' }): IUsuario | null => {
    switch (action.type) {
        case 'LOGIN': 
            // Hacer mis comprobaciones o gestiones
            if (!action.payload) {
                return state;
            }

            return action.payload;

        case 'LOGOUT': 
            return null;
        
        default: 
            return state;
    }
}

export default reducer;
