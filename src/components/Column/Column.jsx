import React from 'react';
import Card from '../Card';
import './Column.css';

const Column = props => {
  const { columnName, onDeleteClick, onEditClick } = props;
  const cardList = props.cardList
    .filter(card => {
      return card.status === columnName;
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

  return (
    <div className="column">
      <div className="columnName">{columnName}</div>
      {cardList}
    </div>
  );
};

export default Column;
