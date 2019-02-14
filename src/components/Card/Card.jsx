import React from 'react';

const Card = props => {
  const { title, body, priority, createdBy, assignedTo } = props;
  return (
    <div className="card">
      <h4 className="title">{title}</h4>
      <div className="body"> {body}</div>
      <div className="priority">Priority: {priority}</div>
      <div className="createdBy">Assigned by: {createdBy}</div>
      <button>Edit</button>
      <button>Delete</button>
      <div className="assignedTo">{assignedTo}</div>
    </div>
  );
};

export default Card;
