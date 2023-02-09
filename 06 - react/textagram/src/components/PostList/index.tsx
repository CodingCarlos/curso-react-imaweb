import React, { useContext } from "react";
import HomeContext from "../../contexts/HomeContext";
import { IPost } from '../../interfaces';
import Post from '../Post';

interface IPostList {
    list: IPost[];
    showComments?: boolean;
};

function PostList(props: IPostList) {
    const [context] = useContext(HomeContext);

    return (
        <>
            {// props.list.map((post) => (
             context.map((post) => (
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
