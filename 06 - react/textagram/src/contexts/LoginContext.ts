import React, { createContext } from 'react';
import { IUsuario } from '../interfaces';

interface ILoginContext {
    context: IUsuario | null;
    setContext: React.Dispatch<React.SetStateAction<IUsuario | null>>;
};
const defaultValue: ILoginContext = {
    context: null,
    setContext: () => {}
};

const LoginContext = createContext(defaultValue);

export default LoginContext;