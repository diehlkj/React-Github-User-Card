import React from 'react';
import Cards from './components/Cards';
import LambdaLogo from './assets/lambdalogo.png';
import GitLogo from './assets/githublogo.png';
import './index.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/diehlkj')
      .then(res => res.json())                                            // Make it the object please
      .then(theData => {
        console.log("componentDidMount > Fetch: ", theData);               // Look at all that DATA ooooyeah
        this.setState({...this.state, data: theData})
      })
      .catch(err => `Uh-oh oopsie... There was a pwoblem haha: ${err}`);  // Please no
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: this.state: ", this.state.data);
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
          <Cards data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
