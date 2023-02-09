import React, { createContext } from 'react';
import { LoginReducerDispatcher, LoginReducerState } from '../reducers/LoginReducer';

// const LoginContext = createContext<[LoginReducerState, React.Dispatch<React.SetStateAction<LoginReducerState>>]>([
//     null,
//     () => {}
// ]);

// const defaultValue: [LoginReducerState, React.Dispatch<React.SetStateAction<LoginReducerState>>] = [
//     null, 
//     () => {}
// ]
// const LoginContext = createContext(defaultValue);

type LoginContextType = [LoginReducerState, React.Dispatch<LoginReducerDispatcher>];
const defaultValue: LoginContextType = [
    null, 
    () => {}
]
const LoginContext = createContext<LoginContextType>(defaultValue);

export default LoginContext;
