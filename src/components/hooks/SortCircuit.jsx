// import "./Hooks.css";
import { useState } from "react";

const ShortCircuitExample = () => {
  const [isLoggedIn,setLoggedIn]=useState(true);
  const [user,setUser]=useState("")
  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
     {isLoggedIn && <p>You are logged in!</p>}
      {user ? `Hello ${user}` : 'Plz logged in!'}
      <div className="grid-three-cols">
        <button onClick={()=>setLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={()=>setUser('Abc hh')}>Set User</button>
        <button onClick={()=>setUser("")}>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuitExample;