export const DELETE_CARD = 'DELETE_CARD';
export const SHOW_ADD_MODAL = 'SHOW_ADD_MODAL';

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
