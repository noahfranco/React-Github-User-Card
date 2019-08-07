import React from "react"; 

function Card(props) {
    console.log("This is calling porps",props)
    return( 
        <div>
           <div src={ props.user.avatar_url } /> 
            Bio: { props.user.bio }   
         </div> 
            

    )
         
}

export default Card; 