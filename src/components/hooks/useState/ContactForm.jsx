import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
    const [user,setUser]=useState({
        username:'',
        email:'',
        message:''
    })
    // const [email,setEmail]=useState("")
    // const [message,setMessage]=useState("")
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setUser((prv)=>({...prv ,[name]:value}))
    }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    // const formData={username,email,message}
    console.log(user)
}
  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInputChange}
            // onChange={(e)=>setUser(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInputChange}
            // onChange={(e)=>setEmail(e.target.value)}

          />

          <label htmlFor="message">Message</label>
          <textarea
            type="password"
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={user.message}
            onChange={handleInputChange}
            // onChange={(e)=>setMessage(e.target.value)}

          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};