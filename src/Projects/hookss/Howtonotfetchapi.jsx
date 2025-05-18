//  fetch("https://jsonplaceholder.typicode.com/posts")
import { useEffect, useState } from "react";

 export const Howtonotfetchapi=()=>{
    //yo state change huney bitikai feri component mount hunxa so we use here useEffect.
const [count,setCount]=useState([]);
useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((res)=>setCount(res));
},[])
   
    return(
           <>
          <ul>
                  {
                    count.map((curElem)=>{
                        return(
                            <li key={curElem.id}>
                              {curElem.id}.{curElem.title}

                            </li>
                        )
                    })
                  }
          </ul>
           </>
    );
 }