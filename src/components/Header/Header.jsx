import React from 'react';
import LoginAndRegister from '../LoginAndRegister';

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
      <div className="title">KANBAN</div>
      <button className="add-card-button" onClick={onNewTaskClick}>
        NEW TASK
      </button>
    </div>
  );
};

export default Header;
