import React from 'react';
import Card from '../../containers/Card';
import './Column.scss';

const Column = props => {
  const { columnStatus } = props;
  const cards = props.cards
    .filter(card => {
      return card.status_id === columnStatus;
    })
    .map(card => {
      console.log(card.status_id);
      return (
        <Card
          key={card.id}
          id={card.id}
          status_id={card.status_id}
          title={card.title}
          body={card.body}
          priority={card.priority}
          createdBy={card.createdByName}
          assignedTo={card.assignedToName}
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
      <div className="columnTitle">
        <h1>{columnTitle}</h1>
      </div>
      <div className="card-container">{cards}</div>
    </div>
  );
};

export default Column;
