import { IoIosSwitch } from "react-icons/io";
import "./ToggleSwitch.css";
import { useState } from "react";
export const ToggleSwitch =()=>{
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };
    const checkIson=isOn ?"on" : "off";
    const toggleBgColor={backgroundColor: isOn ? "#4caf50" : "#f44336"}
    return (
        <>
        <h1 >Toggle Switch <IoIosSwitch style={{color:"red"}}/></h1>
        <div className="toggle-switch" 
         style={toggleBgColor} 
         onClick={handleToggleSwitch}>
            <div className={`switch ${checkIson}`}>
                <span className="switch-state" >{checkIson}</span>
            </div>
        </div>
        </>
    )
}