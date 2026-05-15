const todoKey= "reactTodo"

export const getLocalStorageTodoData=()=>{
    const rowTodo=localStorage.getItem(todoKey);
    if(!rowTodo) return [];
    return JSON.parse(rowTodo)
}
export const setLocalStorageTodoData=(tasks)=>{
    // Add data to local storage
    localStorage.setItem(todoKey,JSON.stringify(tasks))
}