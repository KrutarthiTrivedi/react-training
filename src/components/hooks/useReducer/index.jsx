import { useReducer } from "react";

export const UseReducer=()=>{
    const initialState = {
        count: 0,
        inc: 2,
        dec: 2,
    }
    const reducer = (state, action) => {
        console.log(state, action);
        // if(action.type === "INCREMENT"){
        //     return state + 1;
        // }
        // if(action.type === "DECREMENT"){
        //     return state - 1;
        // }
        // if(action.type === "RESET"){
        //     return 0;
        // }
        
        // return state;

        switch (action.type) {
            case "INCREMENT":
                return { ...state,count: state.count + 1};
            case "DECREMENT":
                return { ...state,count: state.count - 1};
            case "RESET":
                return { ...state,count: 0};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(useReducer(reducer, initialState));
    return (
        <>
            <h1>{state.count}</h1>
            <br/>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>Incriment</button>
            <br/>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>Decriment</button>
            <br/>
            <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
        </>
    )
}