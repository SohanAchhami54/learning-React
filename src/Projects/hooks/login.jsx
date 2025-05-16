import { useState } from "react"
export const Login=()=>{

    const [user, setUser]=useState({
       
    });
    const handleForm=(e)=>{
        const{name,value}= e.target;

         setUser((prev)=>({...prev,[name]:value}));
    }

    const handleSubmit=()=>{
             e.preventDefault();
             const userData={...user};
             console.log(userData);
             setUser({
            username:"",
            email:"",
            password:"",
             });
    }
    return(
        <>
        
            <h1 className="text-2xl font-bold text-blue-400 text-center">Sign Up form</h1>
             

         
               <form onSubmit={handleSubmit}>
                     <div className="grid"> 
                <label htmlFor="username">Username</label>
                <input type="text"
                name="username"
                 placeholder="enter your name"
                
                 value={user.username}
                 onChange={handleForm}  />

                 <label htmlFor="email">email</label>
                <input type="email" 
                name="email"
                placeholder="enter your email"
                 value={user.email}
                 onChange={handleForm} 
                  />

                <label htmlFor="password">Password</label>
                <input type="password" 
                name="password"
                placeholder="enter your password"   
                 value={user.password}
                 onChange={handleForm} 
                  />

                <button type="submit" className="w-2 border rounded-xl mt-2">  CLick me</button>
                </div>
               </form>
        
         
        </>
    )
}