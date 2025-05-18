import { useState } from "react"
export const Login=()=>{
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [email,setEmail]=useState("");
    // const handleForm=(e)=>{
    //     const{name,value}= e.target;

    //      setUser((prev)=>({...prev,[name]:value}));
    // }

    const handleSubmit=(e)=>{
             e.preventDefault();
            const formData={
                username,
                password,
                email,
            };
            console.log(formData);
            setPassword("");
            setEmail("");
            setUsername("");
        };

    return(
        <>
        
            <h1 className="text-2xl font-bold text-blue-400 text-center">Sign Up form</h1>
             

         
               <form onSubmit={handleSubmit}>
                     <div className="grid"> 
                <label htmlFor="username">Username</label>
                <input type="text"
                name="username"
                 placeholder="enter your name"
                
                 value={username}
                 onChange={(e)=>setUsername(e.target.value)}  />

                 <label htmlFor="email">email</label>
                <input type="email" 
                name="email"
                placeholder="enter your email"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)} 
                  />

                <label htmlFor="password">Password</label>
                <input type="password" 
                name="password"
                placeholder="enter your password"   
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)} 
                  />

                <button type="submit" className="w-2 border rounded-xl mt-2">Login </button>
                </div>
               </form>
        
         
        </>
    );
}