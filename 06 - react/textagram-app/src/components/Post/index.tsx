import React, { useEffect, useState } from "react";
import { IPost } from '../../interfaces';
import Comments from "./Comments";
import UserPicName from "../UserPicName";

import './Post.scss';
import { Link } from "react-router-dom";

interface IPostProps {
    post: IPost;
    showComments?: boolean;
}

export default function Post(props: IPostProps) {
    const post = props.post;
    const [showComments, setShowComments] = useState<boolean>(props.showComments || false)

    useEffect(() => {
        setShowComments(props.showComments || false);
    }, [props.showComments]);

    function toggleComments() {
        console.log('Mostrar/ocultar comentarios', showComments);
        setShowComments(!showComments);
    }

    return (
        <article className="post">
            <UserPicName usuario={post.usuario} />
            <div className="post__content">
                {post.contenido}
            </div>
            <button onClick={toggleComments}>
                {post.comentarios?.length || 'No hay'} Comentarios
            </button>

            <Link to={`/post/${post.id}`}>
                Ver detalles
            </Link>

            { showComments && (
                <Comments list={post.comentarios || []} postComment />
            )}
        </article>
    );
}