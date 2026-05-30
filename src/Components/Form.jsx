import { useEffect, useState } from "react";
import { createPost, updatePost } from "../api/PostApi";
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
    const isEmpty=Object.keys(updatePostData).length===0;
    const updatePostDataApi=async ()=>{
        try{
            const res=await updatePost(updatePostData.id,addPostData);
            console.log("res.data:", res);
            if(res.status===200){
                setData((prev)=>{
                    return prev.map((curElm)=>{
                        return curElm.id===updatePostData.id ? res.data : curElm;
                    })
                })
                setAddPostData({
                    title:"",
                    body:""
                });
                setUpdatePostData({});
            }
        }catch(error){
            console.error("Error updating post:", error);
        }
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted with data:", e.nativeEvent.submitter.value);
        const action=e.nativeEvent.submitter.value;
        // Here you can call an API to submit the form data
        if(action==="Add"){
            newPostData()
        }else if(action==="Edit"){
            updatePostDataApi();
        }
     }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Title" name="title" value={addPostData.title} onChange={handleInputChange}/>
            <input type="text" placeholder="Body" name="body" value={addPostData.body} onChange={handleInputChange}/>
            <button type="submit" value={isEmpty ? "Add" : "Edit"}>
                {isEmpty ? "Add" : "Edit"}
            </button>
        </form>
    )  
} 