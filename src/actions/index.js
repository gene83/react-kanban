export const DELETE_CARD = 'DELETE_CARD';
export const TOGGLE_ADD_MODAL = 'TOGGLE_ADD_MODAL';
export const ADD_CARD = 'ADD_CARD';
export const SHOW_EDIT_MODAL = 'SHOW_EDIT_MODAL';
export const HIDE_EDIT_MODAL = 'HIDE_EDIT_MODAL';
export const EDIT_CARD = 'EDIT_CARD';

export const deleteCard = key => {
  return {
    type: DELETE_CARD,
    key: key
  };
};

export const toggleAddModal = () => {
  return {
    type: TOGGLE_ADD_MODAL
  };
};

export const addCard = newCard => {
  return {
    type: ADD_CARD,
    newCard: newCard
  };
};

export const showEditModal = id => {
  return {
    type: SHOW_EDIT_MODAL,
    id: id
  };
};

export const hideEditModal = () => {
  return {
    type: HIDE_EDIT_MODAL
  };
};

export const editCard = editedCard => {
  return {
    type: EDIT_CARD,
    editedCard: editedCard
  };
};
