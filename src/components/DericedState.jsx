import { useState } from "react";
// const users=[
//     {name:"John",
//     age:30,
//     city:"New York",},
//     {name:"Jane",
//     age:25,
//     city:"Los Angeles",},
//     {name:"Bob",
//     age:35,
//     city:"Chicago",}


// ]

export const DerivedState = () => {
    const [users,setUsers]=useState([
        {name:"John",
        age:30,
        city:"New York",},
        {name:"Jane",
        age:25,
        city:"Los Angeles",},
        {name:"Bob",
        age:35,
        city:"Chicago",}
    ]);
    //Derived state is a state that is derived from another state. It is a state that is calculated based on the value of another state. In this example, we are calculating the user count and average age based on the users state.
    const userCount = users.length;
    const average = users.reduce((acc,cur) => acc + cur.age,0)/userCount;
    return (
        <div>
            <h1>List of users</h1>
            <p>User Count: {userCount}</p>
            <p>Average Age: {average.toFixed(2)}</p>
            {users.map((curElm,index) => (
                <p key={curElm.name}>
                    Name: {curElm.name}, Age: {curElm.age}, City: {curElm.city}
                </p>
            ))}
        </div>
    )
}