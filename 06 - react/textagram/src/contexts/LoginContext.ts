import React, { createContext, ReactElement } from 'react';
import { IUsuario } from '../interfaces';
import { LoginReducerDispatcher } from '../reducers/LoginReducer';

// const LoginContext = createContext<[IUsuario | null, React.Dispatch<React.SetStateAction<IUsuario | null>>]>([
//     null,
//     () => {}
// ]);

// const defaultValue: [IUsuario | null, React.Dispatch<React.SetStateAction<IUsuario | null>>] = [
//     null, 
//     () => {}
// ]
// const LoginContext = createContext(defaultValue);

type LoginContextType = [IUsuario | null, React.Dispatch<LoginReducerDispatcher>];
const defaultValue: LoginContextType = [
    null, 
    () => {}
]
const LoginContext = createContext<LoginContextType>(defaultValue);

export default LoginContext;
