import React from 'react';
import LoginAndRegister from '../LoginAndRegister';
import { on } from 'cluster';

const Header = props => {
  const { onNewTaskClick, onRegisterClick, onLoginClick, isLoggedIn } = props;

  return (
    <div className="header">
      <LoginAndRegister
        onRegisterClick={onRegisterClick}
        onLoginClick={onLoginClick}
        isLoggedIn={isLoggedIn}
      />
      <div className="title">KANBAN</div>
      <button className="add-card-button" onClick={onNewTaskClick}>
        NEW TASK
      </button>
    </div>
  );
};

export default Header;
