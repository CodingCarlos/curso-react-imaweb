import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ApiState } from "../interfaces/api-state";
import { getPostsAction } from "../redux/postSlice";
import { AppDispatch, RootState } from "../redux/store";

function useGetPosts() {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.posts.loading);
    const retries = useSelector((state: RootState) => state.posts.retries);
    
    useEffect(() => {
        // dispatch(getPosts());
        const MAX_RETRY = 3;
        const shouldRetry = loading === ApiState.FAILED && retries < MAX_RETRY;
        if (loading === ApiState.IDDLE || shouldRetry) {
            console.log('Vamos a cargar los posts');
            dispatch(getPostsAction());
        }
    }, [dispatch, loading, retries]);
}

export default useGetPosts