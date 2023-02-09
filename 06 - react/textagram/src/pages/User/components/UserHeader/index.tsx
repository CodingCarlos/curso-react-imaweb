import React, { useContext } from "react";
import useLogout from "../../../../hooks/useLogout";
import UserPicName from "../../../../components/UserPicName";
import LoginContext from "../../../../contexts/LoginContext";
import { IUsuario } from "../../../../interfaces";

import './UserHeader.scss';

interface UserHeaderProps {
    user: IUsuario;
}

function UserHeader(props: UserHeaderProps) {
    const [login] = useContext(LoginContext);
    const logout = useLogout();

    return (
        <header className="user-header">
            <UserPicName usuario={props.user} big />
            { login && (login.name === props.user.name) && (
                <button onClick={logout}>
                    Logout
                </button>
            )}
        </header>
    );
}

export default UserHeader;
