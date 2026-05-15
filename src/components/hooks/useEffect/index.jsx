// import { useEffect,useState } from "react";
// import "./index.css";

// export const ReactUseEffect = () => {
//     const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("count value:", count);
//   }, [count]); // Dependency array with count means this effect runs when count changes
//     // You can perform side effects here, such as fetching data or subscribing to events
//   return (
//     <div className="container effect-container">
//       <h1>useEffect Hook</h1>
//       <p>Count:{count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   );
// };


import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseEffect = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setInterval(()=>{
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString());
    },1000)
    
  }, []);

  return (
    <div className="container effect-container">
      <h1> Date : {date} </h1>
    </div>
  );
};