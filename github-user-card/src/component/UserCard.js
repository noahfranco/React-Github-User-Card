import React from "react"; 

function Card(props) {
    console.log("This is calling porps",props)
    return( 
        <div>
           <img src={ props.data.avatar_url } /> 
           <div> Bio: { props.data.bio } </div>  
           <div> Location: { props.data.location } </div>   
         </div> 
            

    )
         
}

export default Card; 