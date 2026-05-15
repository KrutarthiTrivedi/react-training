import { useState } from 'react';
import { TodoForm } from "./TodoForm";
import './Todo.css';
import { TodoList } from "./TodoList";
import { TodoDate } from './TodoDate';
import {setLocalStorageTodoData,getLocalStorageTodoData} from './TodoLocalStorage'
export const Todo = () => {
    // This state is used to store the list of tasks that the user has added to the todo list. It allows us to manage and display the tasks in the UI.
    const [tasks,setTasks] = useState(()=>getLocalStorageTodoData());
    const handleFormSubmit = (inputValue) => {
        const {id,content,checked}=inputValue;
        if(!content) return;
        
        // if(tasks.includes(inputValue))return;     
        const ifTodoContentMatched=tasks.find((curTask)=>curTask.content === content)
        if(ifTodoContentMatched) return
        setTasks((prev)=>[...prev, {id,content,checked}]);
    }
    
    //Handle delete from todo
    const handleDeleteTodo=(value)=>{
        console.log(tasks)
        console.log(value)
        const updatedTodo = tasks.filter((curTask) => curTask.content !== value);
        setTasks(updatedTodo)
    }
    //Handle Clear all
    const handleClearAll=()=>{
        setTasks([]);
    }

    const handleChackedTodo =(content)=> {
        const updatedTask=tasks.map((curTask) => {
            if(curTask.content === content){
                return {...curTask,checked: !curTask.checked }
            }
            else{
                return curTask;
            }
        });
        setTasks(updatedTask)
    }
    setLocalStorageTodoData(tasks)
  return (
    <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit}/>
        <section className='myUnOrderList'>
            <ul>
                {
                    tasks.map((curTask)=>{
                       return <TodoList 
                       key={curTask.id} 
                       data={curTask.content} 
                       checked={curTask.checked}
                       onHandleDeleteTodo={handleDeleteTodo}
                       onHandleCheckedTodo={handleChackedTodo}
                       />
                    })
                }
            </ul>   
        </section>
        <section>
            <button type="submit" className="clear-btn" onClick={handleClearAll}>Clear All</button>
        </section>
    </section>
      
  )
}  