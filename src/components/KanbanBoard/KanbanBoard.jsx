import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cardList, onDeleteClick } = props;

  return (
    <div className="board">
      <Column
        cardList={cardList}
        onDeleteClick={onDeleteClick}
        columnName="In Queue"
      />
      <Column
        cardList={cardList}
        onDeleteClick={onDeleteClick}
        columnName="In Progress"
      />
      <Column
        cardList={cardList}
        onDeleteClick={onDeleteClick}
        columnName="Done"
      />
    </div>
  );
};

export default KanbanBoard;
