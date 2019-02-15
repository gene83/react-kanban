import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cards, onDeleteClick } = props;

  return (
    <div className="board">
      <Column
        cards={cards}
        onDeleteClick={onDeleteClick}
        columnStatus="In Queue"
      />
      <Column
        cards={cards}
        onDeleteClick={onDeleteClick}
        columnStatus="In Progress"
      />
      <Column cards={cards} onDeleteClick={onDeleteClick} columnStatus="Done" />
    </div>
  );
};

export default KanbanBoard;
