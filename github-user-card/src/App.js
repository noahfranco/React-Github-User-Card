import React from 'react';
import './App.css';
import Card from "./component/UserCard.js"
import Followers from "./component/FollowersCard.js"
import Styled from "styled-components"; 

const CenterContent = Styled.div`
display: flex; 
align-items: center;
flex-direction: column 
`

class App extends React.Component {
constructor() {
  super(); 
  this.state = {
    user: [],
    followers: []
  }
}


componentDidMount() {
  this.fetchUsers() 
  this.fetchFollowers()
}


fetchUsers = () => {
  fetch("https://api.github.com/users/noahfranco")
  .then(response => {
    return response.json(); 
  })
  .then(res => this.setState({user: res}))

  .catch(error => {
    console.log("ERROR", error)
  })
}

fetchFollowers = () => {
  fetch("https://api.github.com/users/noahfranco/followers")
  .then(down => {
    return down.json()
  })
  .then(up => this.setState({followers: up}))

  .catch(error => {
    console.log("ERROR", error)
  })
}

render() {
  console.log(this.state)
  return (
    <section>
    <div> 
      <CenterContent> 
      <h1> Noah's GitHub </h1>
      </CenterContent>
      <Card  data={this.state.user} /> 
      {this.state.followers.map(complie => (
        <Followers data={complie} key={complie.id} /> 
      ))}
    </div>
    </section>
  );
}
}
  

export default App;
