import { useState } from "react"

export const State = () => {
    // let count = 0;
    // const handleButtonClick = () => {
    //     count++;
    //     console.log(count)
    // };
    const [count,setCount]=useState(0);
    console.log("Parent component rendered");
    const handleButtonClick = () => {
        setCount(()=>count+1);
    };
    return (
        <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleButtonClick}>Click Me</button>
        </div>
        <ChildComponent/>
        </>
    )
}

const ChildComponent = () => {
    console.log("Child component rendered");
    return (
        <div>
            <h1>This is a child component</h1>
        </div>
    )
}