import React from "react"; 
import Styled from "styled-components"; 
// import { BackgorundColor } from "./UserCard.js"

 const FontSize = Styled.div `
font-size: 15px; 
`
// const ImgSize = Styled.div `
// width: 40px; 
// height: 100px; 
// `

function Followers(props) {
    console.log("this is porps",props)
    return(
        <section> 
            <div> 
                <img src={ props.data.avatar_url } /> 
           <FontSize>  Login: { props.data.login } </FontSize> 
            </div>
        </section>
    )
}

export default Followers; 