import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../contexts/LoginContext';
import { LoginReducerActions } from '../reducers/LoginReducer';
import useLocalStorage from './useLocalStorage';

function useLogout(): () => void {
    const [, loginDispatcher] = useContext(LoginContext);
    const [, setLoginStorage] = useLocalStorage('logged_user');
    const navigate = useNavigate();

    const doLogout = (): void => {
        loginDispatcher({ type: LoginReducerActions.LOGOUT });
        setLoginStorage(null);
        navigate('/');
    }

    return doLogout;
}

export default useLogout;
