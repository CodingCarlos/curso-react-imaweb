import React, { useContext, useRef } from "react";
import LoginContext from "../../contexts/LoginContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IUsuario } from "../../interfaces";
import { findUser } from "../../services/user";

function Login() {
    const username = useRef<HTMLInputElement>(null);
    const [, dispatchLogin] = useContext(LoginContext);
    const [, setStoredLogin] = useLocalStorage<IUsuario>('logged_user');

    function doLogin(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (!username.current || !username.current.value) {
            return;
        }

        const foundUser = findUser(username.current.value);
        if (!foundUser) {
            console.error('Usuario no encontrado');
            return;
        }

        dispatchLogin({ type: 'LOGIN', payload: foundUser });
        setStoredLogin(foundUser);
    }

    return (
        <div>
            <form onSubmit={doLogin}>
                <input
                    type="text"
                    placeholder="name"
                    ref={username}
                />
                <button type="submit">
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;
