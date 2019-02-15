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
        columnStatus="1"
      />
      <Column
        cards={cards}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        columnStatus="2"
      />
      <Column
        cards={cards}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        columnStatus="3"
      />
    </div>
  );
};

export default KanbanBoard;
