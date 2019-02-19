import {
  DELETE_CARD,
  TOGGLE_ADD_MODAL,
  ADD_CARD,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  EDIT_CARD,
  LOAD_CARDS,
  TOGGLE_REGISTER_MODAL,
  REGISTER_USER,
  TOGGLE_LOGIN_MODAL,
  LOGIN_USER,
  LOAD_USERS
} from '../actions';

const initialState = {
  showNewTaskModal: false,
  editModalTaskId: 0,
  showRegisterModal: false,
  showLoginModal: false,
  currentUser: null,
  cards: [],
  users: []
};

let id = 5;

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      const index = state.cards.findIndex(card => card.id === action.id);
      if (index === -1) {
        return state;
      }
      return Object.assign({}, state, {
        cards: state.cards.slice(0, index).concat(state.cards.slice(index + 1))
      });
    case TOGGLE_ADD_MODAL:
      return Object.assign({}, state, {
        showNewTaskModal: !state.showNewTaskModal
      });
    case ADD_CARD:
      action.newCard.status = 1;
      action.newCard.id = id++;
      return Object.assign({}, state, {
        cards: [...state.cards, action.newCard]
      });
    case SHOW_EDIT_MODAL:
      return Object.assign({}, state, {
        editModalTaskId: action.id
      });
    case HIDE_EDIT_MODAL:
      return Object.assign({}, state, {
        editModalTaskId: 0
      });
    case EDIT_CARD:
      const editIndex = state.cards.findIndex(
        card => card.id === action.editedCard.id
      );
      return Object.assign({}, state, {
        cards: state.cards
          .slice(0, editIndex)
          .concat(action.editedCard, state.cards.slice(editIndex + 1))
      });
    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards: action.cards
      });
    case TOGGLE_REGISTER_MODAL:
      return Object.assign({}, state, {
        showRegisterModal: !state.showRegisterModal
      });
    case REGISTER_USER:
      return Object.assign({}, state, {
        users: state.users.concat(action.user)
      });
    case TOGGLE_LOGIN_MODAL:
      return Object.assign({}, state, {
        showLoginModal: !state.showLoginModal
      });
    case LOGIN_USER:
      return Object.assign({}, state, {
        currentUser: action.user
      });
    case LOAD_USERS:
      return Object.assign({}, state, {
        users: action.users
      });
    default:
      return state;
  }
};

export default cardReducer;
