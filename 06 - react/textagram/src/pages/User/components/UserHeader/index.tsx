import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserPicName from "../../../../components/UserPicName";
import LoginContext from "../../../../contexts/LoginContext";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { IUsuario } from "../../../../interfaces";

import './UserHeader.scss';

interface UserHeaderProps {
    user: IUsuario;
}

function UserHeader(props: UserHeaderProps) {
    const [login, loginDispatcher] = useContext(LoginContext);
    const [, setLoginStorage] = useLocalStorage<IUsuario>('logged_user');
    const navigate = useNavigate();

    const handleLogout = () => {
        loginDispatcher({ type: 'LOGOUT' });
        setLoginStorage(null);
        navigate('/');
    }

    return (
        <header className="user-header">
            <UserPicName usuario={props.user} big />
            { login && (login.name === props.user.name) && (
                <button onClick={handleLogout}>
                    Logout
                </button>
            )}
        </header>
    );
}

export default UserHeader;
