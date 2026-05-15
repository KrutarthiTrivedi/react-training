import { useState } from "react";

export const TodoDate =()=>{
    const [dateTime, setDateTime] = useState("");

    setInterval(() => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setDateTime(`${formatedDate} - ${formatedTime}`);
    }, 1000);
    return  <h2 className="date-time">{dateTime}</h2>
    
}