import React from "react"; 

function Card(props) {
    return( 
        <div>
           <img  src={ props.data.avatar_url } /> 
           <div> Bio: { props.data.bio } </div>  
           <div> Location: { props.data.location } </div> 
           <div> Followers: { props.data.followers } </div>
           <div> Fowllowing: { props.data.following } </div>   
         </div> 

    )
         
}

export default Card; 