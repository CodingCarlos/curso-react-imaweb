import React from "react";
import UserPicName from "../../../../components/UserPicName";
import { IUsuario } from "../../../../interfaces";

import './UserHeader.scss';

interface UserHeaderProps {
    user: IUsuario;
}

function UserHeader(props: UserHeaderProps) {
    return (
        <header className="user-header">
            <UserPicName usuario={props.user} />
        </header>
    );
}

export default UserHeader;
