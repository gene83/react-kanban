import React from 'react';

const Header = props => {
  const { onNewTaskClick } = props;

  return (
    <div className="header">
      <div className="title">KANBAN</div>
      <button className="add-card-button" onClick={onNewTaskClick}>
        NEW TASK
      </button>
    </div>
  );
};

export default Header;
