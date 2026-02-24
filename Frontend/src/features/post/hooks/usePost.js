import { useContext } from "react";
import { PostContext } from "../PostContext";
import { getFeed } from "../services/post.api";

export function usePost(){

    const postcontext = useContext(PostContext);

    const {loading, setLoading, post, setPost,feed, setFeed} = postcontext;

    async function handleFeed() {
        setLoading(true);
        const response = await getFeed();
        setFeed(response.posts);
        setLoading(false);
    }

    return {
        handleFeed,
        loading,
        feed,
        post
    }
}