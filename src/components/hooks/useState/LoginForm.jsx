import "./index.css";
import { useState } from "react";

export const LoginForm = () => {
    const [user,setUser]=useState({username:"",password:""})
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
    }
    const handleInputChange =(e)=>{
        const {name,value}=e.target;
        setUser((prvData)=>({...prvData,[name]:value}))
    }
  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInputChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};