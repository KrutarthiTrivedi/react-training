import { useMemo, useState } from "react";
import  Counts  from "./MemoCount.jsx";
export const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const myBiodatata = useMemo(() => {
        return {
            name: "John Doe",
            city: "New York"
        }
    }, []);

  return (
    <div>
      <h2>React Memo</h2>
      <p>{count}</p>
      <button onClick={() => setCount((prv) => prv + 1)}>Incriment</button>
      <br />
      <Counts bioData={myBiodatata} />
    </div>
  );}