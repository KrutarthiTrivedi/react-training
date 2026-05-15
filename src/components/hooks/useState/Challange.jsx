// import "./Hooks.css";
import { useState } from "react";

const CounterChallange = () => {
  const [count,setCount]=useState(0)
  const [step,setStep]=useState(0)
  const handleIncrement=()=>{
    setCount(count+step)
  }
  const handleDecrement=()=>{
    setCount(count-step)
  }
  const handleReset=()=>{
    setCount(0)
  }
  return (
    <section className="container short-container">
      <h1>Challange</h1>
        <p>Counter {count}</p>
        <label>Step</label>
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <div className="grid-three-cols">
        {/* <button onClick={()=> setCount(count+1)}>Increment
        </button> */}
         <button onClick={handleIncrement} disabled={count >=100}>Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>Decrement
        </button>
        {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
        {/* <button onClick={()=>setCount(0)}>Reset</button> */}
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  );
};

export default CounterChallange;