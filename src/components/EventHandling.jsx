export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert("Button was clicked!");
    // }
    const handleButtonClick = () => {
        alert("Button was clicked!");
    }
    const handleWelcomeMessage = (name) => {
        alert(`Welcome, ${name}!`);
    }
    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={handleButtonClick}>Click Me</button>
            <button onClick={(event)=>handleButtonClick(event)}>Click Me 2</button>
            <button onClick={()=>handleWelcomeMessage("Alice")}>Click Me 3</button>
        </div>
    )
}