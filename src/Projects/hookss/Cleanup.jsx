// import { useEffect, useState } from "react";

// export const Cleanup=()=>{
//     const [count, setCount]=useState(0);
//    useEffect(()=>{
//          const timer= setInterval(() => {    
        
//          setCount((prev)=prev+1);
//      },1000);
//      return ()=> clearInterval(timer);
//    },[])
    

//     return(
//         <>
      
//         <div className="bg-blue-600">
//         <p className="text-6xl">My total subscribe in real time.</p>
//         <h1 className="text-7xl">count:{count} </h1>

//         </div>
//           </>
//     );
// };


import { useEffect, useState } from "react";

export const Cleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="bg-blue-600 text-white p-4">
        <p className="text-6xl">My total subscribe in real time.</p>
        <h1 className="text-7xl">count: {count}</h1>
      </div>
    </>
  );
};
