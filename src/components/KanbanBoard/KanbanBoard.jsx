import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cardList, onDeleteClick, onEditClick } = props;

  return (
    <div className="board">
      <Column
        cardList={cardList}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        columnName="In Queue"
      />
      <Column
        cardList={cardList}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        columnName="In Progress"
      />
      <Column
        cardList={cardList}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        columnName="Done"
      />
    </div>
  );
};

export default KanbanBoard;
