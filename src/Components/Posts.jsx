import { useEffect, useState } from "react";
import { getPosts } from "../api/PostApi";
;

export const Posts=()=>{ 
    const [data,setData]=useState([]);
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
  
    return (
    <section className="section-posts">
    <ul>
    {
      data.map((post)=>{
        return <li key={post.id}>
          <h1>{post.id}</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button>Delete</button>
          <button>Edit</button>
        </li>
      })}
    </ul>
    </section>
    );
  }