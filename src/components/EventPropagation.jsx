export const EventPropagation = () => {
    const handleGrandParant=()=>{
        console.log("Grand Parent")
    };
    const handleParentClick=()=>{
        console.log("Parent")
    };
    const handleChildClick=(event)=>{
        console.log(event)
        console.log("Child clicked")
    };
    return (
        <section className="main-div">
            <div onClick={handleGrandParant}>
                <div onClick={handleParentClick}>
                    <button onClick={handleChildClick}>Click Me</button>
                </div>
            </div>
        </section>
    )
}