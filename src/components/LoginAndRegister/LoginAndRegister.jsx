import React from 'react';

const LoginAndRegister = props => {
  const { currentUser, onRegisterClick, onLoginClick, onLogoutClick } = props;

  if (currentUser) {
    return (
      <div className="username-logout">
        {currentUser}
        <button onClick={onLogoutClick}>Log Out</button>
      </div>
    );
  }

  return (
    <div className="login-register">
      <button onClick={onRegisterClick}>Register</button>
      <button onClick={onLoginClick}>Login</button>
    </div>
  );
};

export default LoginAndRegister;
