import React from "react"; 
import Styled from "styled-components"; 

 const FontSize = Styled.div `
font-size: 15px; 
`
const Border = Styled.div`
border: width: 300px;
border: 15px solid black;
padding: 50px;
margin: 20px;
background: lightgray; 
`

function Followers(props) {
    console.log("this is porps",props)
    return(
        <section> 
            <div> 
                <Border> 
             <img src={ props.data.avatar_url } /> 
           <FontSize>  username: { props.data.login } </FontSize> 
                </Border>
            </div>
        </section>
    )
}

export default Followers; 