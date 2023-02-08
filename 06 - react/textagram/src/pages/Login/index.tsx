import React, { useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import { findUser } from "../../services/user";

function Login() {
    const [username, setUsername] = useState<string>('');
    const [login, dispatchLogin] = useContext(LoginContext);
    // const loginContext = useContext(LoginContext);
    // const login = loginContext.context;
    // const setLogin = loginContext.setContext;

    function doLogin(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const foundUser = findUser(username);
        if (!foundUser) {
            console.error('Usuario no encontrado');
            return;
        }

        dispatchLogin({ type: 'LOGIN', payload: foundUser });
        // setLogin(foundUser);
    }

    return (
        <div>
            <form onSubmit={doLogin}>
                <input
                    type="text"
                    placeholder="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;
