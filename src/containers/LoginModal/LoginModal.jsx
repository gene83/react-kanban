import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
  }

  handleUsernameOnChange(e) {
    const value = e.target.value;
    this.setState({
      username: value
    });
  }

  handlePasswordOnChange(e) {
    const value = e.target.value;
    this.setState({
      password: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameOnChange}
          />
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordOnChange}
          />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginModal;
