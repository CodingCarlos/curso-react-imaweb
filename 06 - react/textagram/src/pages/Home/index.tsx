import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
// import { getPosts, addPost } from '../../redux/postSlice';
import { getPostsAction, addPost } from '../../redux/postSlice';

import { IPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.posts.loading);
    const posts = useSelector((state: RootState) => state.posts.list);

    useEffect(() => {
      // dispatch(getPosts());
      dispatch(getPostsAction());
    }, [dispatch]);
  
    function addNewPost(newPost: IPost) {
      dispatch(addPost(newPost));
    }
  
    return (
        <>
          <PostForm onNewPost={addNewPost} />
          { loading ? (<div>Cargando...</div>) : 
            <PostList list={posts} />
          }
        </>
    )
}

export default Home;