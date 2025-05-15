import { FaCheck } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const Todolist=({curElem,checked,handleDelete,handleCheck})=>{

         return(
            <>
         
             <li key={curElem.id} className="todo-item ">
             <span className={checked?"checkList":"notCheckList"} >{curElem.content}  </span>
                 <button className="check-btn" onClick={()=>handleCheck(curElem.content)}>
                   <FaCheck/>
                 </button>
              <button className="delete-btn" onClick={()=>handleDelete(curElem)}>
                      <MdDeleteOutline  />
                   </button>
              </li>
                 </>
    );
}