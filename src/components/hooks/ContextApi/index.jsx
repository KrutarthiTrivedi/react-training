import { createContext } from "react";

export const BioContext=createContext()

export const BioProvider=({children})=>{
    const myName='KKK';
    const age=23;
    return <BioContext.Provider value={{myName,age}}>{children}</BioContext.Provider>
}