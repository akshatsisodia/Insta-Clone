import { useContext } from "react";
import { PostContext } from "../PostContext";
import { getFeed, createPost, likePost, unLikePost } from "../services/post.api";
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

    async function handleCreatePost(postImage,caption){
        setLoading(true);
        const data = await createPost(postImage,caption);
        setFeed([data.post,...feed]);
        setLoading(false);
    }

    async function handleLikePost(postId){
        const data = await likePost(postId);
        await handleFeed();
        return data;
    }

    async function handleUnlikePost(postId){
        const data = await unLikePost(postId);
        await handleFeed();
        return data;
    }

    useEffect(()=>{
        handleFeed();
    },[])

    return {
        handleFeed,
        handleCreatePost,
        handleLikePost,
        handleUnlikePost,
        loading,
        feed,
        post
    }
}