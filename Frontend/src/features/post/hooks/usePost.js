import { useContext } from "react";
import { PostContext } from "../PostContext";
import { getFeed, createPost } from "../services/post.api";
import { useEffect } from "react";

export function usePost(){

    const postcontext = useContext(PostContext);

    const {loading, setLoading, post, setPost,feed, setFeed} = postcontext;

    async function handleFeed() {
        setLoading(true);
        const response = await getFeed();
        setFeed(response.posts);
        setLoading(false);
    }

    async function handleCreatePost(){
        
    }

    useEffect(()=>{
        handleFeed();
    },[])

    return {
        handleFeed,
        loading,
        feed,
        post
    }
}