import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IPost } from "../../../interfaces";
import { RootState } from "../../../redux/store";

function useUserPosts() {
    const allPosts = useSelector((state: RootState) => {
        return state.posts.list
    });
    const [posts, setPosts] = useState<IPost[]>([])
    const { userName } = useParams();

    useEffect(() => {
        const filteredPosts = allPosts.filter(post => post.usuario.name === userName);
        setPosts(filteredPosts);
    }, [allPosts, userName]);

    return posts;
}

export default useUserPosts;
