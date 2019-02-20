import React from 'react';

const LoginAndRegister = props => {
  const { isLoggedIn, onRegisterClick, onLoginClick } = props;

  if (isLoggedIn) {
    return (
      <div className="login-and-register">
        <button onClick={onRegisterClick}>Register</button>
        <button onClick={onLoginClick}>Login</button>
      </div>
    );
  }

  return <></>;
};

export default LoginAndRegister;
