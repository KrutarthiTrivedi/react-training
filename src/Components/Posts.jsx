import { useEffect, useState } from "react";
import { getPosts,deletePost } from "../api/PostApi";
;
import { Form } from "./Form";
export const Posts=()=>{ 
    const [data,setData]=useState([]);
    const [updatePostData,setUpdatePostData]=useState({});
  // Don't log `getPosts()` directly — it returns a Promise.
  const getPostsData=async()=>{
    try{
      const response=await getPosts();
      console.log(response.data);
      setData(response.data);
    }catch(error){
      console.error("Error fetching posts:", error);
    }
  };
  useEffect(()=>{
    getPostsData();
  },[]);
  const handleDeletePost=async(postId)=>{
    try{
      const res=await deletePost(postId);
      if(res.status===200){
        console.log(`Post with id ${postId} deleted successfully.`);
        const updatedPosts=data.filter((post)=>{
          return post.id!==postId;
        });
        setData(updatedPosts);
      }
    }catch(error){
      console.error("Error deleting post:", error);
    }
  }
  const handleUpdatePost=(post)=>{
    setUpdatePostData(post);
  }
    return (
      <>
      <section>
          <Form data={data} setData={setData} updatePostData={updatePostData} setUpdatePostData={setUpdatePostData} />
      </section>
    <section className="section-posts">
    <ul>
    {
      data.map((post)=>{
        return <li key={post.id}>
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={()=>handleDeletePost(post.id)}>Delete</button>
          <button onClick={()=>handleUpdatePost(post)}>Edit</button>
        </li>
      })}
    </ul>
    </section>
    </>
    );
  }