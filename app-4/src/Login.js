import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
        }
        handleUsernameInput(val) {
            this.setState({username: val});
        }
        handlePasswordInput(val) {
            this.setState({password: val});
        }

        handleLogin() {
            alert(`Username: ${this.state.username} Password: ${this.state.password}`);
        }


  render() {
    return (
      <div>
        <input onChange={e => this.handleUsernameInput(e.target.value)} />
        <input onChange={e => this.handlePasswordInput(e.target.value)} />
        <button onClick={e => this.handleLogin()}>Login</button>
      </div>
    );
  }
}

export default Login
