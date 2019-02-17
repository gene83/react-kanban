import React from 'react';

const Header = props => {
  const { onNewTaskClick, onRegisterClick, onLoginClick } = props;

  return (
    <div className="header">
      <button onClick={onRegisterClick}>Register</button>
      <button onClick={onLoginClick}>Login</button>
      <div className="title">KANBAN</div>
      <button className="add-card-button" onClick={onNewTaskClick}>
        NEW TASK
      </button>
    </div>
  );
};

export default Header;
