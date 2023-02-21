import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { addPostAction } from '../../redux/postSlice';

import { INewPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';
import { useListarPostsQueryRefetchOnFocus, useAnadirPostMutation, endpoints } from '../../domain/api/post';

function Home(props: any) {
  // const dispatch = useDispatch<AppDispatch>();
  const { data: posts, isLoading: loading, refetch } = useListarPostsQueryRefetchOnFocus({ orden: 'timestamp' });
  const [anadirPost] = useAnadirPostMutation();

  useEffect(() => {
    refetch();
  }, [refetch])
  
  
  async function addNewPost(newPost: INewPost) {
    // await dispatch(endpoints.anadirPost.initiate(newPost));
    await anadirPost(newPost);
    refetch();
  }

  return (
    <>
      <h1>{props.title}</h1>
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