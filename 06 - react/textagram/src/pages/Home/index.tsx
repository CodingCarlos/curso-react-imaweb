import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { addPostAction } from '../../redux/postSlice';

import { INewPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';
// import useGetPosts from '../../hooks/useGetPosts';
import { useGetPostsQuery } from '../../domain/api/api';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: posts, isLoading: loading, refetch } = useGetPostsQuery();
  
  useEffect(() => {
    refetch();
  }, [refetch])
  
  
  async function addNewPost(newPost: INewPost) {
    await dispatch(addPostAction(newPost))
    refetch();
  }

  return (
    <>
      <PostForm onNewPost={addNewPost} />
      {/* { loading === ApiState.IDDLE || loading === ApiState.LOADING ? ( */}
      { loading ? (
          <div>Cargando...</div>
        ) : posts ? (
          <PostList list={posts} />
        ) : <div>Error</div>
      }
    </>
  )
}

export default Home;