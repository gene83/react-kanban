export const DELETE_CARD = 'DELETE_CARD';
export const TOGGLE_ADD_MODAL = 'TOGGLE_ADD_MODAL';
export const ADD_CARD = 'ADD_CARD';
export const SHOW_EDIT_MODAL = 'SHOW_EDIT_MODAL';
export const HIDE_EDIT_MODAL = 'HIDE_EDIT_MODAL';
export const EDIT_CARD = 'EDIT_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const TOGGLE_REGISTER_MODAL = 'TOGGLE_REGISTER_MODAL';

export const deleteCard = id => {
  return dispatch => {
    return fetch('/cards', {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => {
      return dispatch({
        type: DELETE_CARD,
        id: id
      });
    });
  };
};

export const toggleAddModal = () => {
  return {
    type: TOGGLE_ADD_MODAL
  };
};

export const addCard = newCard => {
  return dispatch => {
    return fetch('/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        return dispatch({
          type: ADD_CARD,
          newCard: newCard
        });
      })
      .catch(err => {
        throw err;
      });
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
  return dispatch => {
    return fetch('/cards', {
      method: 'PUT',
      body: JSON.stringify(editedCard),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        return dispatch({
          type: EDIT_CARD,
          editedCard: editedCard
        });
      })
      .catch(err => {
        throw err;
      });
  };
};

export const loadCards = cards => {
  return dispatch => {
    return fetch('/cards')
      .then(response => {
        return response.json();
      })
      .then(cards => {
        return dispatch({
          type: LOAD_CARDS,
          cards: cards
        });
      });
  };
};

export const toggleRegisterModal = () => {
  return {
    type: TOGGLE_REGISTER_MODAL
  };
};
