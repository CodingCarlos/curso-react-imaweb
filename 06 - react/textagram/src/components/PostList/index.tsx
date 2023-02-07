import React from "react";
import { IPost } from '../../interfaces';
import Post from '../Post';

interface IPostList {
    list: IPost[];
};

function PostList(props: IPostList) {
    return (
        <>
            { props.list.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    showComments
                />
            )) }
        </>
    );
}

export default PostList;
