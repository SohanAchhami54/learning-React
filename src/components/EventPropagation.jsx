export const EventPropagation=()=>{
 const handleGrandparent=(event)=>{
    //event.stopPropagation();
    console.log("grandParent");
 }
 const handleParent=(event)=>{
    //event.stopPropagation();
    console.log("parent");
 }
 
 const handleChild=(event)=>{
   //event.stopPropagation();
    console.log("child");
 }
    return (
        <>
       <div className="flex justify-center">
        <section className="">
            <div className="w-100 h-100 border-7 border-red-500" onClickCapture={handleGrandparent}>
                <div  className="w-70 h-70 border-7 border-red-500 m-13" onClickCapture={handleParent}>
        <button className=" bg-blue-500 w-30 border-5 rounded-full mt-25 ml-17" onClickCapture={handleChild}>
                            Click me!
                     </button>
                </div>
            </div>
           
        </section>
        </div>
                </>

    );
}