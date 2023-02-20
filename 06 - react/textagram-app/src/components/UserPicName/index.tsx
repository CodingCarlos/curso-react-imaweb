import React from "react";
import { Link } from "react-router-dom";
import { IUsuario } from "../../interfaces";

import './UserPicName.scss'

interface IUserPicName {
    usuario: IUsuario;
    big?: boolean;
}

function UserPicName(props: IUserPicName) {
    function getClassName() {
        let className = 'user-pic-name';

        if (props.big) {
            className += ' user-pic-name--big';
        }

        return className;
    }

    return (
        <div className={`user-pic-name ${getClassName()}`}>
            <Link to={`/user/${props.usuario.name}`}>
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
