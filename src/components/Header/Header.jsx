import React from 'react';
import LoginAndRegister from '../LoginAndRegister';
import './Header.scss';

const Header = props => {
  const {
    onNewTaskClick,
    onRegisterClick,
    onLoginClick,
    currentUser,
    onLogoutClick
  } = props;

  return (
    <div className="header">
      <LoginAndRegister
        onRegisterClick={onRegisterClick}
        onLoginClick={onLoginClick}
        currentUser={currentUser}
        onLogoutClick={onLogoutClick}
      />
      <div className="title">
        <h1>KANBAN</h1>
      </div>
      <button className="add-card-button" onClick={onNewTaskClick}>
        NEW TASK
      </button>
    </div>
  );
};

export default Header;
