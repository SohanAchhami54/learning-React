import { useState } from "react";

export const LiftingUpState=()=>{
       const [count,setInputalue]=useState("");
       const handleChange=(e)=>{
         setInputalue(e.target.value+1);
       }
    return(
      <div className="text-center">
       <Input  count={count} onChange={handleChange}  />
       <Display count={count} />
       
      </div>
    );
}

const  Input=({count, onChange})=>{
 
    return(
        <div >
          <input className="border-2 rounded-lg" type="text"
           placeholder="enter your name"
            value={count}
            onChange={onChange}
            />
        </div>
    );
}

const Display=({inputvalue})=>{
    return(
        <>
        <p className="text-red-500 text-[2rem]"> your name is:{inputvalue} </p>
        </>
    )
}