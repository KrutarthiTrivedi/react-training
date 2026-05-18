import { useContext } from "react"
import { BioContext } from "."
export const About=()=>{
   const {myName,age}= useContext(BioContext)
    return (
        <h1>Context Api (About) {myName} age {age}</h1>
    )
}