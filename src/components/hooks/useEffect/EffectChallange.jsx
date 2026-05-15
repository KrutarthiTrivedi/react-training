import { useEffect, useState } from "react";
import "./index.css";
export const EffectChallange = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        console.log("Count value:", count);
    },[count]);
    useEffect(()=>{
        console.log("Name value:", name);
    },[name])
    useEffect(()=>{
        document.title=`Count:${count}`
    },[count])
    return (
        <div className="container effect-container">
            <h1>Use effectChallange </h1>
            <p>Count {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <input type="text" placeholder="Enter something..." value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name:{name}</p>
        </div>
    );
}