import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export const getFeed =  async  () => {
    try{
        const response = await api.get("/api/post/feed");
        return response.data;
    }catch(err){
        throw err;
    }
}


export const createPost = async (postImage,caption)=>{
    const formData = new FormData;

    formData.append("postImage",postImage);
    formData.append("caption",caption)

    const response = await api.post("/api/post",formData);
    
    return response.data;
}