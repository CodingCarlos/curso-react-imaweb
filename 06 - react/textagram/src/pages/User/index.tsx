import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { IUsuario } from "../../interfaces";
import { findUser } from '../../services/user';
import UserHeader from "./components/UserHeader";
import PostList from "../../components/PostList";
import useUserPosts from "./hooks/useUserPosts";
import useGetPosts from "../../hooks/useGetPosts";
import { RootState } from "../../redux/store";

function User() {
    const [user, setUser] = useState<IUsuario>();
    const { userName } = useParams();
    const posts = useUserPosts();
    const users = useSelector((state: RootState) => state.users.list)
    
    useGetPosts();
    
    useEffect(() => {
        if (!userName) {
            console.error('No viene parámentro de usuario');
            return;
        }
        
        const userFound = findUser(users, userName);
        if (!userFound) {
            console.error('Usuario no encontrado');
            return;
        }

        setUser(userFound);
    }, [userName, users]);

    return (
        <>
            {(user && (
                <>
                <UserHeader user={user} />
                <h2>Posts de {user.name}</h2>
                <PostList list={posts} showComments />
                </>
            )) || (
                <h2>Usuario no encontrado</h2>
            )}
        </>
    )
}

export default User;