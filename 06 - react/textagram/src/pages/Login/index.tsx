import React, { useRef } from "react";
import useLogin from "../../hooks/useLogin";
import { findUser } from "../../services/user";

function Login() {
    const username = useRef<HTMLInputElement>(null);
    const login = useLogin();

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

        login(foundUser);
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
