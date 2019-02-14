import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cards } = props;

  return (
    <div className="board">
      <Column cards={cards} columnName="In Queue" />
      <Column cards={cards} columnName="In Progress" />
      <Column cards={cards} columnName="Done" />
    </div>
  );
};

export default KanbanBoard;
