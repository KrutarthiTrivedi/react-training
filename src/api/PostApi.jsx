import axios from "axios";

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const getPosts=()=>{
    return api.get("/posts");
}
//for delete post
export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`);
}

export const createPost=(postData)=>{
    return api.post("/posts",postData);
}