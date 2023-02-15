import React, { useRef } from "react";
import useLogin from "../../hooks/useLogin";
import { addUser, findUser } from "../../services/user";
import RegisterUser from "./components/RegisterUser";

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

    function register(data: object) {
        console.log('Registrando al usuario...', data);
        addUser(data)
            .then(console.log);
    }

    return (
        <div>
            <h2>Login as user</h2>
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

            <h2>Register new user</h2>
            <RegisterUser onRegister={register} />
        </div>
    );
}

export default Login;
