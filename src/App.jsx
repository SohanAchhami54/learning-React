

import { Button } from "./components/Eventhandling";
import { EventPropagation } from "./components/EventPropagation";
import { LiftingUpState } from "./components/hooks/LiftingUpstate";
import { State } from "./components/hooks/State";
import { Todo } from "./Projects/Todo/Todo";


// import { MasterUseState } from "./components/hooks/MasterUseState";
import {Toggleswitch} from "./Projects/Toggleswitch";
// import { IoIosSwitch } from "react-icons/io";
  export const App=()=>{
    
    return(
      <div>
      <h1 className="text-5xl text-center mt-20 text-green-500">my name is sohan achhami</h1>
        <Todo/>

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

