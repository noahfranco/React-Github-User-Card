import React from 'react';
import './App.css';
import axios from "axios"; 
import Card from "./component/UserCard"

class App extends React.Component {
constructor() {
  super(); 
  this.state = {
    user: {}
  }
}


fetchUsers = () => {
  axios 
  .get("https://api.github.com/users/noahfranco")
  .then(res => this.setState({user: res}))
 
  .catch(error => {
    console.log("ERROR", error)
  })
}

componentDidMount() {
  this.fetchUsers() 
}

render() {
  console.log(this.state)
  return (
    <section>
    <div> 
      <h1> Noah's GitHub </h1>
      <Card  data={this.state.user} /> 
     {/* { this.state.user.bio} */}
    </div>
    </section>
    
  );
}
}
  

export default App;
