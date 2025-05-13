export const Button=()=>{

    const handleClick=(user)=>{
        alert(`welcome ${user} to react series`);
    
    };
    return(
        <>
        {/* <button onClick={handleClick}>
           click me
        </button> */}

        <button onClick={()=>handleClick("sohan")}>Click me</button>
        <button onClick={()=>handleClick("bibek")}>Click me</button>
        <button onClick={()=>handleClick("prabhat")}>Click me</button>
        </>
    );
}