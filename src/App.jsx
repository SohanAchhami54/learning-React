

import { Button } from "./components/Eventhandling";
import { EventPropagation } from "./components/EventPropagation";
import { LiftingUpState } from "./components/hooks/LiftingUpstate";
import { State } from "./components/hooks/State";
//import { Todo } from "./Projects/Todo/Todo";

import { useState } from "react";


// import { MasterUseState } from "./components/hooks/MasterUseState";
import {Toggleswitch} from "./Projects/Toggleswitch";
import { UseState } from "./Projects/hooks/useState";
import { Registration } from "./Projects/hooks/Registration";
import { NewRegistration } from "./Projects/hooks/NewRegistration";
import {Login} from "./Projects/hooks/login"
 //import { Useeffect } from "./Projects/Hooks2/Useeffect";
// import { IoIosSwitch } from "react-icons/io";
import {Cleanup} from "./Projects/hookss/Cleanup"
import { Howtonotfetchapi } from "./Projects/hookss/Howtonotfetchapi";
  export const App=()=>{
    
    return(
      <div >
      {/* <h1 className="text-5xl text-center mt-20 text-green-500">my name is sohan achhami</h1> */}
        {/* <Todo/> */}
        {/* <UseState /> */}
        {/* <Registration/> */}
        {/* <NewRegistration/> */}
        {/* <Login/> */}
        {/* <Useeffect/> */}
          <Howtonotfetchapi/>
         {/* <Cleanup/> */}
      {/* <LiftingUpState/> */}
      {/* <MasterUseState/> */}

      {/* <State/> */}

      </div>
      // <section className="container">
      // <h1 className="card-heading">List of the movies</h1>
      // <Netflix/>
      // </section>
    );
  }
