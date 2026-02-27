import { usePost } from "../hooks/usePost";


const Post = ({user,post,handleLikePost ,handleUnlikePost}) => {

  return (
    <div className="post">
      <div className="user">
        <div className="img-container">
          <img src={user.profile_pic} alt="" />
        </div>
        <p>{user.username}</p>
      </div>
      <div className="post-image-container">
        <img src={post.imageUrl} alt="" />
      </div>
      <div className="icons">
        <div className="left">
          <button>
            <svg onClick={()=>{post.isLiked?handleUnlikePost(post._id):handleLikePost(post._id)}} className={post.isLiked?"like":""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 11.5C21 6.8 16.97 3 12 3S3 6.8 3 11.5
           7.03 20 12 20c1.2 0 2.35-.2 3.4-.6L21 21l-1.5-4.2
           c.95-1.4 1.5-3.1 1.5-5.3z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div className="right">
          <button>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 3H18C19.1 3 20 3.9 20 5V21L12 17L4 21V5 C4 3.9 4.9 3 6 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bottom">
        <p>{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
