import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../../domain/api/api";
import { IPost } from "../../../interfaces";

function useUserPosts() {
    const { data: allPosts } = useGetPostsQuery();
    const [posts, setPosts] = useState<IPost[]>([])
    const { userName } = useParams();

    useEffect(() => {
        if (!allPosts) {
            return;
        }

        const filteredPosts = allPosts.filter(post => post.usuario.name === userName);
        setPosts(filteredPosts);
    }, [allPosts, userName]);

    return posts;
}

export default useUserPosts;
