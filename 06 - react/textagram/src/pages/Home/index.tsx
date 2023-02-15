import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
// import { getPosts, addPost } from '../../redux/postSlice';
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
    
    // const retries = useSelector((state: RootState) => state.posts.retries);

    // useEffect(() => {
    //   // dispatch(getPosts());
    //   const MAX_RETRY = 3;
    //   const shouldRetry = loading === ApiState.FAILED && retries < MAX_RETRY;
    //   if (loading === ApiState.IDDLE || shouldRetry) {
    //     console.log('Vamos a cargar los posts');
    //     dispatch(getPostsAction());
    //   }
    // }, [dispatch, loading, retries]);
  
    function addNewPost(newPost: INewPost) {
      dispatch(addPostAction(newPost));
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