import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    };
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
  }

  render() {
    return (
      <div className="register-modal">
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

RegisterModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);

export default RegisterModal;
