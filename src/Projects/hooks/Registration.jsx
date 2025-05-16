import { useState } from "react";
import "./Registration.css";
export const Registration=()=>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [number, setNumber]=useState("");

    const handleform=(e)=>{
        console.log(e.target);
        //first patak change vayo vaney chai teo value sabai ma update garxa  yo code ley.
        const {name,value}=e.target;
        //yesko meaning chai e.name=name  and  e.value=value.
        //e.preventDefault();
         switch(name){
            case "firstName":
             setFirstName(value);
              break;
        
             case "lastName":
                setLastName(value);
                break;

                case "email":
                    setEmail(value);
                    break;
                    case "password":
                        setPassword(value);
                        break;

                      default:
                            setNumber(value);
                       
            
         }
          
        //   setLastName(value);
        //   setEmail(e.target.value);
        //   setPassword(e.target.value);
        //   setNumber(e.target.value);
    }

    const passtheData=(e)=>{
        e.preventDefault();
        const formData={
              firstName,
              lastName,
              email,
              password,
              number,
        };
        console.log(formData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setNumber("");
    }
    return(
        <>
        <p className="grid grid-cols-2 font-bold text-2xl">
            hello my name is :{firstName} {lastName}
            <span>
                my email address is:{email}
            </span>
            <span>
                my phone number is:{number}
            </span>
        </p>
       <form onSubmit={passtheData} >
        <div className="container grid">
            <h1>SignUp form</h1>
            <p>please fill this form to create the new account</p>
            <label htmlFor="firstName">
                <b>First Name</b>
                </label>

            <input type="text" 
            name="firstName" 
            placeholder="Enter your firstname"
            value={firstName}
            onChange={handleform}
             required   />

             <label htmlFor="lastName">
                <b>Last Name</b>
                </label>

            <input type="text" 
            name="lastName" 
            placeholder="Enter your lastname"
            value={lastName}
            onChange={handleform}
             required/>

             <label htmlFor="email">
                <b>Email</b>
                </label>
                <input type="email"  placeholder="enter your email" name="email" 
                onChange={handleform}
                value={email}required />
 
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="enter your password" name="password" 
                onChange={handleform}
                value={password} 

                required />
           
             <label htmlFor="number"><b>Number</b></label>
                <input type="number" placeholder="enter your number" name="number" 
                onChange={handleform}
                value={number} 

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