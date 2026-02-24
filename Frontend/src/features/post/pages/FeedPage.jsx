import { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import "../styles/feed.scss";

const FeedPage = () => {

  const {loading, handleFeed , feed} = usePost();


  useEffect(()=>{
    handleFeed();
  },[])

  if(loading || !feed){
    return (<main><h1>Loading..... Feed</h1></main>)
  }
  
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.map((post)=>{
            return <Post user={post.user} post={post}/>
          })}
        </div>
      </div>
    </main>
  );
};

export default FeedPage;
