import React from 'react';
import axios from "axios";
import './App.css';
import CardList from "./components/CardList";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personal: {},
      followers: []
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/diehlkj')               // Get My Profile
    .then (res => this.setState({personal: res.data}))                   // Set My Profile To State
    axios.get('https://api.github.com/users/diehlkj/followers')     // Get My Followers
    .then (res => {
      let followerArray = [];                                       // Declare Holding Array For Follower Profiles
      // res.data.forEach(fol => console.log(fol))
      res.data.forEach(follower => {                                // For Each Follower
        axios.get(follower.url)                                     // Get Their Individual Profile
          .then(res => followerArray.push(res.data))                // Push Their Profile Data To followerArray
          .then(res => this.setState({followers: followerArray}))   // Set followerArray Full Of Follower Profile Data Objects To State
          // .then(console.log(followerArray))
      });
    })
  }
  render() {
      return (
        <div className="App">
          
          <CardList user={this.state.personal} followers={this.state.followers}/>
        </div>
      );
  }
}
export default App;