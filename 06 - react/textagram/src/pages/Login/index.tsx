import React, { useContext, useRef } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import LoginContext from "../../contexts/LoginContext";
// import useLocalStorage from "../../hooks/useLocalStorage";
import useLogin from "../../hooks/useLogin";
// import { IUsuario } from "../../interfaces";
// import { LoginReducerActions } from '../../reducers/LoginReducer';
import { findUser } from "../../services/user";

function Login() {
    const username = useRef<HTMLInputElement>(null);
    // const [, dispatchLogin] = useContext(LoginContext);
    // const [, setStoredLogin] = useLocalStorage<IUsuario>('logged_user');
    // const navigate = useNavigate();
    // const [searchParams] = useSearchParams();
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
        // dispatchLogin({ type: LoginReducerActions.LOGIN, payload: foundUser });
        // setStoredLogin(foundUser);
        // const redirect = searchParams.get('redirect') || '/';
        // navigate(redirect);
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
