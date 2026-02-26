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


export const createPost = async ()=>{
    try{
        const response = await api.post("/api/post/");
        return response.data;
    }catch(err){
        throw err;
    }
}