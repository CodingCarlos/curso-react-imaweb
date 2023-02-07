import React, { useState } from "react";
import { IPost } from "../../../../interfaces";

import './PostForm.scss';

interface PostFormProps {
    onNewPost: (newPost: IPost) => void;
}

function PostForm(props: PostFormProps) {
    const [newPostText, setNewPostText] = useState('');

    function newPost(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // Comprobamos si el post viene vacío
        if (!newPostText) {
            return;
        }

        // Creamos nuestro nuevo post
        const newPost: IPost = {
            id: `${Math.floor(Math.random() * 100000)}`,
            contenido: newPostText,
            usuario: {
                name: 'Yo',
                pic: '...'
            }
        };
        // Llamamos al handler
        props.onNewPost(newPost);
        // Limpiamos el form
        setNewPostText('');
    }

    return (
        <form onSubmit={newPost} className="post-form">
            <textarea
                name="text-content"
                value={newPostText}
                onChange={e => { setNewPostText(e.target.value) }}
                placeholder="What's happening?"
            ></textarea>
            <button type="submit">
                Publish
            </button>
        </form>
    );
}

export default PostForm;
