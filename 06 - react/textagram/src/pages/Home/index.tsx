import React, { useState, useEffect } from 'react';

import HomeContext from '../../contexts/HomeContext';
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
          <HomeContext.Provider value={[posts, setPosts]}>
            <PostForm onNewPost={addNewPost} />
            <PostList list={posts} />
          </HomeContext.Provider>
        </>
    )
}

export default Home;