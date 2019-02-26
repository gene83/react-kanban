import React from 'react';
import './LoginAndRegister.scss';

const LoginAndRegister = props => {
  const { currentUser, onRegisterClick, onLoginClick, onLogoutClick } = props;

  if (currentUser) {
    return (
      <div className="username-logout">
        <h4>{currentUser}</h4>
        <div>
          <button onClick={onLogoutClick}>Log Out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-register">
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onRegisterClick}>Register</button>
    </div>
  );
};

export default LoginAndRegister;
