import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { IUsuario } from "../../interfaces";
import { findUser } from '../../services/user';
import UserHeader from "./components/UserHeader";
import PostList from "../../components/PostList";
import useUserPosts from "./hooks/useUserPosts";

function User() {
    const [user, setUser] = useState<IUsuario>();
    // const [posts, setPosts] = useState<IPost[]>([]);

    const { userName } = useParams();

    const posts = useUserPosts();

    useEffect(() => {
        if (!userName) {
            console.error('No viene parámentro de usuario');
            return;
        }
        
        const userFound = findUser(userName);
        if (!userFound) {
            console.error('Usuario no encontrado');
            return;
        }

        setUser(userFound);
        // const postList = listPostsByUser(userName);
        // setPosts(postList);
    }, [userName]);

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