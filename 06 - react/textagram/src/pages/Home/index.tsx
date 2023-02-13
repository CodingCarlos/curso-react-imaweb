import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { getPosts, addPost } from '../../redux/postSlice';

import { IPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';

function Home() {
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts.list);

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);
  
    function addNewPost(newPost: IPost) {
      dispatch(addPost(newPost));
    }
  
    return (
        <>
          <PostForm onNewPost={addNewPost} />
          <PostList list={posts} />
        </>
    )
}

export default Home;