export const DELETE_CARD = 'DELETE_CARD';
export const SHOW_ADD_MODAL = 'SHOW_ADD_MODAL';
export const HIDE_ADD_MODAL = 'HIDE_ADD_MODAL';
export const ADD_CARD = 'ADD_CARD';

export const deleteCard = key => {
  return {
    type: DELETE_CARD,
    key: key
  };
};

export const showAddModal = () => {
  return {
    type: SHOW_ADD_MODAL,
    display: 'block'
  };
};

export const hideAddModal = () => {
  return {
    type: HIDE_ADD_MODAL,
    display: 'hidden'
  };
};

export const addCard = newCard => {
  return {
    type: ADD_CARD,
    newCard: newCard
  };
};
