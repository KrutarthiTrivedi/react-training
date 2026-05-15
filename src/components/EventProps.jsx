export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Welcome, ${user}!`);
    }

const handleHover = () => {
    alert("You hovered over the element!");
}

return (
    <>
        <WelcomeUser onButtonClick={() => handleWelcomeUser("Alice")} onMouseEnter={handleHover}/>
    </>
)
}
const WelcomeUser = ({ onButtonClick, onMouseEnter }) => {
    const handleGreeting = () => {
        alert("Hello! Welcome to our website.");
        onButtonClick(); // Call the onButtonClick prop to trigger the welcome message
    }
    return (
        <>
            <button onClick={onButtonClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>

    )
}