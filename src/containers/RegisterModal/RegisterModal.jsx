import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    };

    this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
    this.handleFirstNameOnChange = this.handleFirstNameOnChange.bind(this);
    this.handleLastNameOnChange = this.handleLastNameOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeModalClassName(show) {
    if (show) {
      return 'register-modal show-modal';
    }

    return 'register-modal hide-modal';
  }

  handleFirstNameOnChange(e) {
    const value = e.target.value;
    this.setState({
      first_name: value
    });
  }

  handleLastNameOnChange(e) {
    const value = e.target.value;
    this.setState({
      last_name: value
    });
  }

  handleEmailOnChange(e) {
    const value = e.target.value;
    this.setState({
      email: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, first_name, last_name } = this.state;

    const newUser = {
      first_name,
      last_name,
      email
    };

    this.props.registerUser(newUser);

    this.setState({
      email: '',
      first_name: '',
      last_name: ''
    });
  }

  render() {
    return (
      <div className={this.makeModalClassName(this.props.show)}>
        <form>
          First Name:
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.handleFirstNameOnChange}
          />
          Last Name:
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.handleLastNameOnChange}
          />
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailOnChange}
          />
          <button onClick={this.handleSubmit}>Register</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.showRegisterModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => {
      dispatch(registerUser(user));
    }
  };
};

RegisterModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);

export default RegisterModal;
