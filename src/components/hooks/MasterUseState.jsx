import { useState  } from "react";
export const MasterUseState=()=>{
const [users,setUsers]=useState([
    {name:"sohan",age:27},
    {name:"prabhat",age:22},
    {name:"bibek",age:24},
 ]);
 //this is the derieved state which store the value of another state of props.
 const userCount=users.length;
const averageAge=users.reduce((acc,curElem)=>acc+curElem.age,0)/userCount;
    return(
        <div className="text-center"> 
           <h1>users list</h1>
           <ul>
            {users.map((user,index)=>{
                return (
                 <li key={index}>
                    <h1> name:{user.name} and age:{user.age}</h1>

                 </li>
            );
            })} 
           </ul>
           <p>total user:{userCount} </p>
           <p>average age of the student is:{averageAge}</p>
          </div>
    );

}