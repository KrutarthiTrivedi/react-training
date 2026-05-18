import { useContext } from "react"
import { BioContext } from "."
export const Home=()=>{
   const {myName,age}= useContext(BioContext)
    return (
        <h1>Context Api {myName} age {age}</h1>
    )
}