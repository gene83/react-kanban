import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cardList } = props;

  return (
    <div className="board">
      <Column cardList={cardList} columnName="In Queue" />
      <Column cardList={cardList} columnName="In Progress" />
      <Column cardList={cardList} columnName="Done" />
    </div>
  );
};

export default KanbanBoard;
