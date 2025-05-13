import seriesData from "../api/seriesData.json";
import {SeriesCard} from "./SeriesCard";

export const  Netflix=()=>{
const net=seriesData.map((curElem)=>
     <SeriesCard key={curElem.id} curElem={curElem} />
)
return(
      <ul className="grid grid-three-cols">
          {net}
      </ul>
       
);
}