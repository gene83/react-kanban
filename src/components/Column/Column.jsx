import React from 'react';
import Card from '../Card';
import './Column.css';

const Column = props => {
  const { columnStatus, onDeleteClick, onEditClick } = props;

  const cards = props.cards
    .filter(card => {
      return card.status === columnStatus;
    })
    .map(card => {
      return (
        <Card
          id={card.key}
          title={card.title}
          body={card.body}
          priority={card.priority}
          createdBy={card.createdBy}
          assignedTo={card.assignedTo}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
        />
      );
    });

  let columnTitle;

  switch (columnStatus) {
    case 'in_queue':
      columnTitle = 'In Queue';
      break;
    case 'in_progress':
      columnTitle = 'In Progress';
      break;
    case 'done':
      columnTitle = 'Done';
      break;
    default:
      columnTitle = columnStatus;
  }

  return (
    <div className="column">
      <div className="columnTitle">{columnTitle}</div>
      {cards}
    </div>
  );
};

export default Column;
