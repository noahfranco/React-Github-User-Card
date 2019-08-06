import React from "react"; 

fetchUsers = () => {
    fetch("https://api.github.com/noahfranco/")
    .then(res => {
        return res.json(); 
    })
    .then(users => this.setState)
}