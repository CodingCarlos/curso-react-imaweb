import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
// import { getPosts, addPost } from '../../redux/postSlice';
import { getPostsAction, addPost } from '../../redux/postSlice';

import { IPost } from '../../interfaces';

import PostForm from './components/PostForm';
import PostList from '../../components/PostList';
import { ApiState } from '../../interfaces/api-state';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.posts.loading);
    const retries = useSelector((state: RootState) => state.posts.retries);
    const posts = useSelector((state: RootState) => state.posts.list);

    useEffect(() => {
      // dispatch(getPosts());
      const MAX_RETRY = 3;
      const shouldRetry = loading === ApiState.FAILED && retries < MAX_RETRY;
      if (loading === ApiState.IDDLE || shouldRetry) {
        console.log('Vamos a cargar los posts');
        dispatch(getPostsAction());
      }


    }, [dispatch, loading]);
  
    function addNewPost(newPost: IPost) {
      dispatch(addPost(newPost));
    }
  
    return (
        <>
          <PostForm onNewPost={addNewPost} />
          {/* { loading === ApiState.SUCCESS ? (
              <PostList list={posts} />
            ) : loading === ApiState.FAILED ? ( 
              <div>¡Error!</div>
            ) : (
              <div>Cargando...</div>
            )
          } */}
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