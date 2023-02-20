import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { addPostAction } from '../../redux/postSlice';

import { INewPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';
import { useListarPostsQueryRefetchOnFocus, endpoints } from '../../domain/api/post';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: posts, isLoading: loading, refetch } = useListarPostsQueryRefetchOnFocus({ orden: 'timestamp' });
  
  useEffect(() => {
    refetch();
  }, [refetch])
  
  
  async function addNewPost(newPost: INewPost) {
    await dispatch(endpoints.anadirPost.initiate(newPost));
    refetch();
  }

  return (
    <>
      <PostForm onNewPost={addNewPost} />
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