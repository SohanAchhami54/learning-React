export const SeriesCard=({curElem})=>{
    const {name,id,img_url,rating,description,cast,genre,watch_url}=curElem;
    
const Buttonsohan=styled.button`
     padding:1.2rem 2,4rem;
      border:none;
      fontSize:1.6rem;
      background-Color:${({rating})=>rating>=8.5?"red":"green"};
       color:green;
    `;

    const Ratingsohan=styled.h2`
          font-size:2rem;
          color:brown;
          margin:1rem;
    `;

  
      const averOrsuper=rating>=8.5?styles.superhit:styles.average;

    return(
  
     <li className={styles.card}>
        <div>
            <img src={img_url}  alt={name}  />
        </div>
        <div  className="card-content">
          <h1 style={{fontSize:"2rem"}}> Name:{name}</h1>
          <h2> id:{id} </h2>
        <Ratingsohan> Rating:
         <span className={`${styles.rating} ${averOrsuper}`}> {rating}  </span> 
          </Ratingsohan>
        {/* jsx vitra js object ko lagi {{}} */}
        <p className="text-3xl font-bold underline"> description:{description} </p>
        <p> genre:{genre} </p>
        <p> cast:{cast} </p>
           <a  href={watch_url} target="_blank" rel="noopener noreferrer">
            <Buttonsohan rating={rating} >Watch Now</Buttonsohan>
            </a>   
            </div>
      </li>
   
    );
}
