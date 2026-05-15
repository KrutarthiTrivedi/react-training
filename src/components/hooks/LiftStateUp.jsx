import { useState } from "react";
export const LiftStateUp = () => {
    const [inputValue,setInputValue]=useState("");

        return (
            <>
                <InputComponent inputVlaue={inputValue} setInputValue={setInputValue} />
                <DisplayComponent inputValue={inputValue} />
            </>
        )
}

const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <div>
            <input type="text" placeholder="Enter some text" value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            </div>
    )}

const DisplayComponent = ({ inputValue }) => {
   return <p>The current value is: {inputValue}</p>;
};