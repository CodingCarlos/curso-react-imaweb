import React, { useContext, useRef } from "react";
import LoginContext from "../../contexts/LoginContext";
import { findUser } from "../../services/user";

function Login() {
    const username = useRef<HTMLInputElement>(null);
    const [login, dispatchLogin] = useContext(LoginContext);

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
