import { useRef, useState } from "react";
import "../styles/createpost.scss";
import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/usePost";

const CreatePost = () => {
    const navigate = useNavigate();

    const [caption,setCaption] = useState("");
    const postImageRef = useRef(null)

    const {loading , handleCreatePost,} = usePost()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const file = postImageRef.current.files[0];

        await handleCreatePost(file,caption);
        
        navigate("/");
    }

    if(loading){
        return (<main>
            <h2>Post Creation in process..</h2>
        </main>)
    }
    
  return (
    <main className="create-post-page"> 
        <div className="form-container">
            <h2>Create Your Post</h2>
            <form onSubmit={handleSubmit}>
                <label className="post-image-label" htmlFor="postImage" >Select File</label>
                <input ref={postImageRef} type="file" hidden id="postImage" name="postImage" placeholder="Choose Your File" />
                <input onChange={(e)=>{setCaption(e.target.value)}} type="text" name="caption" placeholder="Enter Caption.."/>
                <button className="button primary-btn">Submit</button>
            </form>
        </div>
    </main>
  );
};

export default CreatePost;
