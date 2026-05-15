import { useState } from "react";

export const TodoForm =({onAddTodo})=>{
     // THis state is used to store the current value of the input field where users type their tasks. It allows us to keep track of what the user is typing and update the UI accordingly.
     const [inputValue,setInputValue] = useState({});
     const handleInputChange = (value) => {
        setInputValue({id:value,content:value,checked:false});
    }
   const handleFormSubmit=(e)=>{
    e.preventDefault();
    onAddTodo(inputValue)
    setInputValue({id:"",content:"",checked:false});
   }
    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                
                <div>
                    <input type="text" className='todo-input' placeholder='Enter a task' autoComplete="off" value={inputValue.content} onChange={(event)=>handleInputChange(event.target.value)}/>
                </div>
                <div>
                    <button type="submit" className='todo-button'>Add Task</button>
                </div>
            </form>
        </section>
    )
}