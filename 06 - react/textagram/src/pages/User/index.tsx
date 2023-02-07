import React from "react";
import { IUsuario } from "../../interfaces";
import UserHeader from "./components/UserHeader";

function User() {
    const user:IUsuario = {
        name: "Paco",
        pic: "https://www.thispersondoesnotexist.com/image"
    }

    return (
        <>
            <UserHeader user={user} />
        </>
    )
}

export default User;