import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLoginModal, loginUser } from '../../actions';
import './LoginModal.scss';

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
      return 'modal login-modal show-modal';
    }

    return 'modal login-modal hide-modal';
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

    const { username, password } = this.state;

    const user = {
      username,
      password
    };

    this.props.loginUser(user);

    this.setState({
      username: '',
      password: ''
    });

    this.props.closeModal();
  }

  render() {
    return (
      <div className={this.makeModalClassName(this.props.show)}>
        <div className="modal-main">
          <form>
            <div className="username">Username:</div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameOnChange}
            />
            <div className="password">Password:</div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordOnChange}
            />
            <div className="button">
              <button onClick={this.handleSubmit}>Login</button>
            </div>
          </form>
        </div>
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
  return {
    closeModal: () => {
      dispatch(toggleLoginModal());
    },

    loginUser: user => {
      dispatch(loginUser(user));
    }
  };
};

LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export default LoginModal;
