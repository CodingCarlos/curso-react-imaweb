import React from "react";
import { IPost } from '../../interfaces';
import Post from '../Post';

interface IPostList {
    list: IPost[];
    showComments?: boolean;
};

function PostList(props: IPostList) {
    return (
        <>
            { props.list.length === 0 ? (
                <div>No hay posts</div>
            ) : props.list.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    showComments={props.showComments}
                />
            )) }
        </>
    );
}

export default PostList;
