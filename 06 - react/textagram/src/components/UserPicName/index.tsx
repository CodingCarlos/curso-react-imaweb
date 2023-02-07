import React from "react";
import { Link } from "react-router-dom";
import { IUsuario } from "../../interfaces";

import './UserPicName.scss'

interface IUserPicName {
    usuario: IUsuario;
}

function UserPicName(props: IUserPicName) {
    return (
        <div className="user-basic-info">
            <Link to="/user">
                <img
                    src={props.usuario.pic}
                    alt="profile"
                />
                <span>
                    {props.usuario.name}
                </span>
            </Link>
        </div>
    );
}

export default UserPicName;
