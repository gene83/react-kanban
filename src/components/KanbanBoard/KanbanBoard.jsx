import React from 'react';
import Column from '../Column';
import './KanBanBoard.css';

const KanbanBoard = props => {
  const { cards, onDeleteClick, onEditClick } = props;

  return (
    <div className="board">
      <Column
        cards={cards}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        columnStatus="in_queue"
      />
      <Column
        cards={cards}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        columnStatus="in_progress"
      />
      <Column
        cards={cards}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        columnStatus="done"
      />
    </div>
  );
};

export default KanbanBoard;
