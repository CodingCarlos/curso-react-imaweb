import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { addPostAction } from '../../redux/postSlice';

import { INewPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';
import { ApiState } from '../../interfaces/api-state';
import useGetPosts from '../../hooks/useGetPosts';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.list);
    const loading = useSelector((state: RootState) => state.posts.loading);

    useGetPosts();
  
    function addNewPost(newPost: INewPost) {
      dispatch(addPostAction(newPost));
    }
  
    return (
        <>
          <PostForm onNewPost={addNewPost} />
          { loading === ApiState.IDDLE || loading === ApiState.LOADING ? (
              <div>Cargando...</div>
            ) : (
              <PostList list={posts} />
            )
          }
        </>
    )
}

export default Home;