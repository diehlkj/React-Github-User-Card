import React from 'react';
import Cards from './components/Cards';
import FollowerCards from './components/FollowerCards';
import LambdaLogo from './assets/lambdalogo.png';
import GitLogo from './assets/githublogo.png';
import './index.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  getUser = () => {

    fetch('https://api.github.com/users/diehlkj')
      .then(userRes => userRes.json())                                      // Make it the object please
      .then(userData => {
        console.log("App.js > App > getUser > Fetch:", userData);           // Look at all that DATA ooooyeah
        this.setState({...this.state, user: userData})
      })
      .catch(err => `Uh-oh oopsie... There was a pwoblem haha: ${err}`);    // Please no
  }

  getFollowers = () => {

    let userList = [];

    fetch('https://api.github.com/users/diehlkj/followers')
      .then(res => res.json())
      .then(resArr => {
        console.log('App.js > App > getFollowers > Fetch-1:', resArr)
        resArr.forEach(i => {
          fetch(i.url)
            .then(followersRes => followersRes.json())
            .then(followerData => {
              //console.log("App.js > App > getFollowers > Fetch-1 > Fetch-2: ", followerData);
              userList.push(followerData);
            })
        })
      })
      .then(
        console.log("App.js > App > getFollowers > userList: ", userList),  // Look at all that DATA ooooyeah
        this.setState({...this.state, followers: userList})
      )
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: this.state.user: ", this.state.user);    
    console.log("componentDidUpdate: this.state.followers: ", this.state.followers);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={LambdaLogo} alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src={GitLogo} alt="GitHub Logo" />
        </div>
        <div className="cards">
          <Cards data={this.state.user} />
          <FollowerCards data={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
