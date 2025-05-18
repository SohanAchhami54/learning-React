// import { useEffect, useState } from "react"
// //this is example number 2.
// export const Useeffect=()=>{
//     const [count, setCount]=useState(0);
//     useEffect(()=>{
//         console.log("count:",count);
//     }
//     ,[count])
//     return(
//         <>
//         <h1 className="text-2xl text-blue-500 text-center">example of useeffect</h1>
//            <p>count:{count} </p>
//            <button className="p-2 text-blue-300 " onClick={()=>{setCount(count+1)}}>Click me!</button>
//            <Child count={count} />
//         </>
//     )
// }

// const Child=({count})=>{
//     return(
//         <>
//       <h1> {count}</h1> 
//         </>
//     );
// }

import { useEffect,useState } from "react";
export const Useeffect=()=>{
    const [count,setCount]=useState(0);
    const [increment, setIncrement]=useState(0);
    const [username,setUsername]=useState("");
// yo  tala ko useeffect tw chalxa tara second time jaba input ko value add hudai janxa taba yo chalxa
    useEffect(()=>{
            console.log("name:",username);
    },[username]);
    //jaba samm yo username value change vai rakxa taba samma yo mathi ko useeffect chalirahanxa. 

    useEffect(()=>{
        setInterval(()=>{
             let date=new Date();
             setCount(date.toLocaleTimeString());
        },1000);
    },[])

    useEffect(()=>{
        document.title=`count:${increment}`;
    },[increment])

    return(
        <div className="grid grid-cols-2 gap-4 m-3">
        <h1 className=" text-9xl text-blue-950 text-center bg-amber-600">UseEffect</h1>
        <h2 className="text-8xl text-amber-600 text-center bg-amber-900">{count}</h2>

        <h1 className="text-cyan-600 text-7xl text-center bg-amber-400 "> increment: {increment} </h1>
        <button className="p-3 text-amber-200" onClick={()=>setIncrement(increment+1)}>Increment</button>

        <h1 className="text-7xl text-amber-950 bg-emerald-200 "> Name: {username} </h1>

        <input className=" shadow-2xl  border-2 bg-blue-200" type="text" name="username" placeholder="Enter your name"
        value={username}
         onChange={(e)=>{setUsername(e.target.value)}}
        />
        </div>
    );
}