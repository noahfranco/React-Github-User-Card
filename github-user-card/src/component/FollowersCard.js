import React from "react"; 

function Followers(props) {
    return(
        <section> 
            <div> 
                { props.data.login }
            </div>
        </section>
    )
}

export default Followers; 