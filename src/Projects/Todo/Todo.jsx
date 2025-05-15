import { useState } from "react";
import { Todoform } from "./Todoform";
import { Todolist } from "./Todolist";
import { DataCom } from "./DataCom";
import "./Todo.css";

export const Todo=()=>{
    const [task, setTask]=useState([]);

    const handleFormSubmit=(inputvalue)=>{   
       const {id, content, checked}=inputvalue;
        if(!content) return;
      if(task.find((curElem)=>curElem.content===content)) return;
        
        //previous data lai access garna milxa
        setTask((prev)=>[...prev,{id, content, checked}]);
         
        
    }
    //date in javascript and setinterval ley chai after 1 milliseconds function lai call garney kam garxa.
    //for deleting the todo-list
    const handleDelete=(e)=>{
       console.log(e);
       console.log(task);
       const updatedValue=task.filter((curElem)=> curElem.content!=e.content);
       setTask(updatedValue);
            
    }
    const handleCheck=(value)=>{
          const updatedvalue=task.map((curElem)=>{
            if(curElem.content===value){
                return {...curElem,checked:!curElem.checked}
            }else{
                return curElem;
            }
          });
          setTask(updatedvalue);
        

    }
    const deleteAll=()=>{
       
       setTask([]);
    }

    return(
        <section>
            <header>
               <h1 className="text-black-500 text-center mt-10 text-2xl font-bold">Todo List</h1>
                 <DataCom/>
            </header>
           <Todoform   onAdd={handleFormSubmit}  />
            <section className="myUnOrdList ml-30" >
        
            <ul>
                {
                    task.map((curElem)=>{
                       return   <Todolist key={curElem.id}  
                       curElem={curElem}
                       checked={curElem.checked}
                        handleDelete={handleDelete} 
                        handleCheck={handleCheck} />     
                    })
                }
            </ul>
            
            </section>
            <section>
                 <button className=" ml-155  clear-btn" onClick={deleteAll} >Clear All</button>
            </section>
           
        </section>
);
}