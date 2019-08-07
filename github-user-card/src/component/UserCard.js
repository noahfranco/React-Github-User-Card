import React from "react"; 
import Styled from "styled-components"; 

const Margin = Styled.div`
margin: 10px; 
`
const CenterContent = Styled.div`
display: flex; 
align-items: center;
flex-direction: column 
`
const Border = Styled.div`
border: width: 300px;
border: 15px solid black;
padding: 50px;
margin: 20px;
background: lightgray; 
`

function Card(props) {
    return( 
        <div>
            <Border> 
            <CenterContent> 
           <img  src={ props.data.avatar_url } />
           <Margin> </Margin> 
           <div> Bio: { props.data.bio } </div>  
           <Margin> </Margin>
           <div> Location: { props.data.location } </div> 
           <Margin> </Margin>
           <div> Followers: { props.data.followers } </div>
           <Margin> </Margin>
           <div> Fowllowing: { props.data.following } </div>   
           </CenterContent>
           </Border>
         </div> 

    )
         
}

export default Card; 