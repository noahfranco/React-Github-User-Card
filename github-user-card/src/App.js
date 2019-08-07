import React from 'react';
import './App.css';
import Card from "./component/UserCard.js"
import Followers from "./component/UserCard.js"


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
      <h1> Noah's GitHub </h1>
      <Card  data={this.state.user} /> 
    </div>
    </section>
    
  );
}
}
  

export default App;
