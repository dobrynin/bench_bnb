import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    debugger
    const user = this.props.currentUser;
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome {user}</h1>
          <button onClick={this.props.logout}>Sign Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Sign In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
