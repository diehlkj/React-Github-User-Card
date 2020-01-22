import React from 'react';
import Cards from './components/Cards';
// import FollowerCards from './components/FollowerCards';
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
    let x;
  }

  getUser = () => {

    fetch('https://api.github.com/users/diehlkj')
      .then(userRes => userRes.json())                                      // Make it the object please
      .then(userData => {
        console.log("App.js > App > getUser > Fetch:", userData);           // Look at all that DATA ooooyeah
        this.setState({...this.state, user: userData})
      })
      .catch(err => `Uh-oh oopsie... ${err}`);                              // Please no
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
    this.x = this.state.followers;
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
          {/* {console.log('==============================This is line 78!==============================', this.state.followers)} */}
        </div>
        <div>
          {/* {for (let i = 0; i < this.x.length(); i = i + 1) {
            console.log(this.x[i])
            return null
          }} */}
        </div>

        {this.x && this.x.map(e => console.log('APP > Render > this.state.followers.map(e): ', e))}

        {/* {this.x && console.log('==============================This is line 82!==============================',this.x)}         */}
        
      </div>
    );
  }
}

export default App;
