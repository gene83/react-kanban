export const DELETE_CARD = 'DELETE_CARD';

export const deleteCard = key => {
  return {
    type: DELETE_CARD,
    key: key
  };
};
