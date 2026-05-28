import { useEffect, useState } from "react";
import { createPost } from "../api/PostApi";
export const Form=({data, setData, updatePostData, setUpdatePostData})=>{
    const [addPostData,setAddPostData,]=useState({
        title:"",
        body:""
    });
    useEffect(()=>{
        updatePostData && setAddPostData({
            title:updatePostData.title,
            body:updatePostData.body
        });
    },[updatePostData])
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setAddPostData((prevData)=>({
            ...prevData,
            [name]:value
        }));

    }
    const newPostData = async()=>{
        const res=await createPost(addPostData);
        console.log("res.data:", res.data);
        if(res.status===201){
            setData([...data,res.data]);
            setAddPostData({
                title:"",
                body:""
            });
        }
    }
     const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted with data:", addPostData);
        // Here you can call an API to submit the form data
        newPostData()
     }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Title" name="title" value={addPostData.title} onChange={handleInputChange}/>
            <input type="text" placeholder="Body" name="body" value={addPostData.body} onChange={handleInputChange}/>
            <button type="submit">Submit</button>
        </form>
    )  
}