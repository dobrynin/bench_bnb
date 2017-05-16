import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(property) {
    return (e => this.setState({[property]: e.target.value}));
  }

  render() {
    const otherForm = (this.props.formType === "login") ? 'signup' : 'login';
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => <p key={idx}>{error}</p>);
    }


    return (
      <div>
        <header>{this.props.formType === "login" ? "Log In" : "Sign Up"}</header>
        <Link to={`/${otherForm}`} />
        {errors}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>Password
            <input type='password' value={this.state.password} onChange={this.update('password')} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );

  }
}

export default withRouter(SessionForm);
