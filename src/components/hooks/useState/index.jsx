import { useState } from "react"

export const Counter = ()=>{
    console.log(useState())
    const [count,setCount]=useState(0)
    return (
        <div className="container state-container" style={{textAlign:"center"}}>
            <h1>Use State hook!</h1>
            <br/>
            <p>{count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}
