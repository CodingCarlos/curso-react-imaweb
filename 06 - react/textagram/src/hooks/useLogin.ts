import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoginContext from '../contexts/LoginContext';
import { IUsuario } from '../interfaces';
import { LoginReducerActions } from '../reducers/LoginReducer';
import useLocalStorage from './useLocalStorage';

function useLogin(): (foundUser: IUsuario) => void {
    const [, loginDispatcher] = useContext(LoginContext);
    const [, setLoginStorage] = useLocalStorage('logged_user');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const doLogin = (foundUser: IUsuario): void => {
        loginDispatcher({ type: LoginReducerActions.LOGIN, payload: foundUser });
        setLoginStorage(foundUser);
        const redirect = searchParams.get('redirect') || '/';
        navigate(redirect);
    }

    return doLogin;
}

export default useLogin;
