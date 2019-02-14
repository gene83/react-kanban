import React from 'react';

const Card = props => {
  const {
    id,
    title,
    body,
    priority,
    createdBy,
    assignedTo,
    onDeleteClick
  } = props;

  const boundOnDeleteClick = onDeleteClick.bind(null, id);

  return (
    <div className="card">
      <h4 className="title">{title}</h4>
      <p className="body"> {body}</p>
      <div className="priority">Priority: {priority}</div>
      <div className="createdBy">Assigned by: {createdBy}</div>
      <button>Edit</button>
      <button onClick={boundOnDeleteClick}>Delete</button>
      <div className="assignedTo">{assignedTo}</div>
    </div>
  );
};

export default Card;
