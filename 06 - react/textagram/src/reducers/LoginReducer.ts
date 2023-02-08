import { IUsuario } from "../interfaces";

export interface LoginReducerDispatcher {
    type?: string;
    payload?: IUsuario;
};

const reducer = (state: IUsuario | null = null, action: LoginReducerDispatcher = {}) => {
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
