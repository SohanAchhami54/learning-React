import { useState } from "react";
export const Todoform=({onAdd})=>{
        const [inputvalue, setInputvalue]=useState({});

           const handleInputChange=(value)=>{
                setInputvalue({id:value, content:value, checked:false});
              }

              const handleFormSubmit=(event)=>{
                event.preventDefault();
                  onAdd(inputvalue);
                  setInputvalue({id:"", content:"", checked:false});
              }


    return(
           <section className="form">
              <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text"
                     className="todo-input" 
                     autoComplete="off"
                    value={inputvalue.content}
                    onChange={(event)=>handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Click me</button>
                </div>
              </form>
            </section>
    );
}