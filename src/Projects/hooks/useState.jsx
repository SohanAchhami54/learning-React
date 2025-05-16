import { useState } from "react"

export const UseState=()=>{
    const [count, setCount]=useState(0);
    const[number,setNumber]=useState(0);

    const handleIncrement=()=>{
     
            setCount(count+number);
       
    }
    const handleDecrement=()=>{
      
            setCount(count-number);

    }
    const handlereset=()=>{
        setCount(0);
    }
  
    return(
        <div className="text-center mt-10 font-bold text-2xl  h-[200px] w-[600px] bg-red-400 mt-10  ">
        <h1> count: {count} </h1>
        <section className="grid-cols-3 gap-4">
            <span>Steps:</span>
          <input type="number" placeholder="0" value={number}  className="border-2"
           onChange={(e)=>setNumber(Number(e.target.value))} />
        </section>
       
        <button onClick={handleIncrement} disabled={count>=100} className="border-2 p-3 bg-blue-300 rounded-xl">Increment</button>
        <button onClick={handleDecrement}  disabled={count<=0} className="border-2 p-3 bg-blue-300 rounded-xl">Decrement</button>
        <button onClick={handlereset}> Click me</button>
        </div>
      
       
    )
}