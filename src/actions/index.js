export const DELETE_CARD = 'DELETE_CARD';
export const TOGGLE_ADD_MODAL = 'TOGGLE_ADD_MODAL';
export const ADD_CARD = 'ADD_CARD';

export const deleteCard = key => {
  return {
    type: DELETE_CARD,
    key: key
  };
};

export const showAddModal = () => {
  return {
    type: TOGGLE_ADD_MODAL,
    display: 'block'
  };
};

export const addCard = newCard => {
  return {
    type: ADD_CARD,
    newCard: newCard
  };
};
