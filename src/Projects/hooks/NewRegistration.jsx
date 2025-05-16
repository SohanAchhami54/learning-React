import { useState } from "react";
import "./Registration.css";
export const NewRegistration=()=>{
    const [user, setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        number:"",   
    });
  
    const handleform=(e)=>{
        console.log(e.target);
        //first patak change vayo vaney chai teo value sabai ma update garxa  yo code ley.
        //const name=e.target.name; yesko matlab chai const name=firstname.
        const {name,value}=e.target;
        //yesko meaning chai e.name=name  and  e.value=value.
        //e.preventDefault();   
         setUser((prev)=>({...prev,[name]:value}));
          
        //   setLastName(value);
        //   setEmail(e.target.value);
        //   setPassword(e.target.value);
        //   setNumber(e.target.value);
    }

    const passtheData=(e)=>{
        e.preventDefault();
        const formData={...user};
        // const formData={
        //       firstName,
        //       lastName,
        //       email,
        //       password,
        //       number,
        // };
        console.log(formData);
        setUser({
             firstName:"",
             lastName:"",
              email:"",
             password:"",
              number:"",   

        });
    }
    return(
        <>
        <p className="grid grid-cols-2 font-bold text-2xl">
            hello my name is :{user.firstName} {user.lastName}
            <span>
                my email address is:{user.email}
            </span>
            <span>
                my phone number is:{user.number}
            </span>
        </p>
       <form onSubmit={passtheData} >
        <div className=" grid">
            <h1>SignUp form</h1>
            <p>please fill this form to create the new account</p>
            <label htmlFor="firstName">
                <b>First Name</b>
                </label>

            <input type="text" 
            name="firstName" 
            placeholder="Enter your firstname"
            value={user.firstName}
            onChange={handleform}
             required   />

             <label htmlFor="lastName">
                <b>Last Name</b>
                </label>

            <input type="text" 
            name="lastName" 
            placeholder="Enter your lastname"
            value={user.lastName}
            onChange={handleform}
             required/>

             <label htmlFor="email">
                <b>Email</b>
                </label>
                <input type="email"  placeholder="enter your email" name="email" 
                onChange={handleform}
                value={user.email}required />
 
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="enter your password" name="password" 
                onChange={handleform}
                value={user.password} 

                required />
           
             <label htmlFor="number"><b>Number</b></label>
                <input type="number" placeholder="enter your number" name="number" 
                onChange={handleform}
                value={user.number} 

                required />
                

                {/* <p>
                   <h1>by creating an account you agree to our terms and policies.</h1> 
                    <a href="#" style={{color:blue}}> Terms and condition</a>
                </p> */}

                <div className="clearfix">
                    <button type="submit" className="submit">
                          Signup
                    </button>

                </div>
        </div>
       </form>
        </>
    );
}