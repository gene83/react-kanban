export const DELETE_CARD = 'DELETE_CARD';
export const TOGGLE_ADD_MODAL = 'TOGGLE_ADD_MODAL';
export const ADD_CARD = 'ADD_CARD';
export const SHOW_EDIT_MODAL = 'SHOW_EDIT_MODAL';
export const HIDE_EDIT_MODAL = 'HIDE_EDIT_MODAL';
export const EDIT_CARD = 'EDIT_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const TOGGLE_REGISTER_MODAL = 'TOGGLE_REGISTER_MODAL';
export const REGISTER_USER = 'REGISTER_USER';
export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const LOGIN_USER = 'LOGIN_USER';

export const deleteCard = id => {
  return dispatch => {
    return fetch(`/cards/${id}`, {
      method: 'DELETE'
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
    return fetch(`/cards/${editedCard.id}`, {
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

export const registerUser = user => {
  return dispatch => {
    return fetch('/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => {
      const { username, first_name } = user;

      const newReduxStoreUser = {
        username,
        first_name
      };

      return dispatch({
        type: REGISTER_USER,
        user: newReduxStoreUser
      });
    });
  };
};

export const toggleLoginModal = () => {
  return {
    type: TOGGLE_LOGIN_MODAL
  };
};

export const loginUser = user => {
  return dispatch => {
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      if (res.status === 401) {
        return;
      }
      return dispatch({
        type: LOGIN_USER,
        user: user.username
      });
    });
  };
};
