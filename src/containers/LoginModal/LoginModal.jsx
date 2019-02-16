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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeModalClassName(show) {
    if (show) {
      return 'login-modal show-modal';
    }

    return 'login-modal hide-modal';
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
      <div className={this.makeModalClassName(this.props.show)}>
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

const mapStateToProps = state => {
  return {
    show: state.showLoginModal
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export default LoginModal;
