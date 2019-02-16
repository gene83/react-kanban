import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cards } = props;

  return (
    <div className="board">
      <Column cards={cards} columnStatus={1} />
      <Column cards={cards} columnStatus={2} />
      <Column cards={cards} columnStatus={3} />
    </div>
  );
};

export default KanbanBoard;
