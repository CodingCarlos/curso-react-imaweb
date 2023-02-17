import React from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";
import { useTraerPostQuery } from "../../domain/api/post";

function PostDetail() {
    const { id } = useParams();
    const { data: miPostPorID } = useTraerPostQuery(id || '');

    return (
        <section>
            { miPostPorID && (
                <Post
                    post={miPostPorID}
                /> 
            )}
        </section>
    )
}

export default PostDetail