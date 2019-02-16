import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cards } = props;

  return (
    <div className="board">
      <Column cards={cards} columnStatus="in_queue" />
      <Column cards={cards} columnStatus="in_progress" />
      <Column cards={cards} columnStatus="done" />
    </div>
  );
};

export default KanbanBoard;
