import React, { useState, useEffect } from 'react';

import { IPost } from '../../interfaces';
import { getPosts, addPost } from '../../services/post';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';

function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
      const postList = getPosts();
      setPosts(postList);
    }, []);
  
    function addNewPost(newPost: IPost) {
      addPost(newPost);
      setPosts([newPost, ...posts]);
    }
    return (
        <>
            <PostForm onNewPost={addNewPost} />
            <PostList list={posts} />
        </>
    )
}

export default Home;