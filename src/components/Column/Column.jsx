import React from 'react';
import Card from '../../containers/Card';
import './Column.css';

const Column = props => {
  const { columnStatus } = props;
  const cards = props.cards
    .filter(card => {
      return card.status_id === columnStatus;
    })
    .map(card => {
      return (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          body={card.body}
          priority={card.priority}
          createdBy={card.createdBy}
          assignedTo={card.assignedTo}
        />
      );
    });

  let columnTitle;

  switch (columnStatus) {
    case 1:
      columnTitle = 'In Queue';
      break;
    case 2:
      columnTitle = 'In Progress';
      break;
    case 3:
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
