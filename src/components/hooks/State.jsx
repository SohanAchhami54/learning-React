import { useState } from "react";
  

export const State=()=>{
     const [count,setCount]=useState(0); 
     const increase=()=>{
        if(count<10){
       setCount(count+1);
        }
        }
         const decrease=()=>{
        if(count>0){
       setCount(count-1);

        } 
    }
   return(
    <>
    <h1 className="text-2xl transition duration-2000 linear ease-in-out delay-[100] text-center hover:text-red-500  "> Changes is :{count} </h1>
    <States count={count} increase={increase} decrease={decrease}/>
    </>
   );
}
 const States=({count,increase,decrease})=>{
  
    return(
        <>
      
        <div className="flex justify-center gap-10 my-10">
       
        <h1 className="text-3xl ">{count}</h1>
        <h1 className="text-3xl">{count}</h1>
        <h1 className="text-3xl">{count}</h1>
        <h1 className="text-3xl">{count}</h1>
        <h1 className="text-3xl">{count}</h1>
          <button className=" h-10 border-4 border-blue-400 bg-[rgba(0,0,0,0.4)] text-white text-lg" onClick={increase}>
            Click me baby to increase
          </button>
          <button className=" border-4 border-blue-400 bg-red-500 text-white text-lg" onClick={decrease}>
            Click me baby to decrease
          </button>
    
           </div>
             </>
    );
} 
