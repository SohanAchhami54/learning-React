import { useState } from "react";
import { FaCheck} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./Todo.css";

export const Todo=()=>{
    const [inputvalue, setInputvalue]=useState("");
    const [task, setTask]=useState([]);
    const handleInputChange=(value)=>{
                setInputvalue(value);
    }

    const handleFormSubmit=(event)=>{   
        event.preventDefault();
        if(!inputvalue) return;
        if(task.includes(inputvalue)){
            setInputvalue("");
            return;
        } 
        //previous data lai access garna milxa
        setTask((prev)=>[...prev,inputvalue]);
    }
    return(
        <section>
            <header>
               <h1>Todo List</h1>
            </header>
            <section className="form">
              <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text"
                     className="todo-input" 
                     autoComplete="off"
                    value={inputvalue}
                    onChange={(event)=>handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Click me</button>
                </div>
              </form>
            </section>
            <section className="myUnOrdList ml-30" >
        
            <ul>
                {
                    task.map((curElem,index)=>{
                           return(
                              <li key ={index} className="todo-item ">
                            <span>name:{curElem}  </span>
                            <button className="check-btn">
                                <FaCheck/>
                            </button>
                            <button className="delete-btn">
                                <MdDeleteOutline  />
                            </button>
                        </li>
                         
                           );
                    })
                }
            </ul>
            </section>
        </section>
);
}