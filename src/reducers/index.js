import {
  DELETE_CARD,
  TOGGLE_ADD_MODAL,
  ADD_CARD,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  EDIT_CARD
} from '../actions';

const initialState = {
  showNewTaskModal: false,
  showEditTaskModal: false,
  cards: [
    {
      key: 1,
      title: 'finish react-redux',
      body: '',
      priority: 'blocker',
      createdBy: 'gene',
      assignedTo: 'gene',
      status: 'In Queue'
    },
    {
      key: 2,
      title: 'finish react-redux',
      body: '',
      priority: 'Low',
      createdBy: 'gene',
      assignedTo: 'gene',
      status: 'In Progress'
    },
    {
      key: 3,
      title: 'finish react-redux',
      body: '',
      priority: 'High',
      createdBy: 'gene',
      assignedTo: 'gene',
      status: 'Done'
    }
  ]
};

let id = 4;

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      const index = state.cards.findIndex(card => card.key === action.key);
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
      action.newCard.status = 'In Queue';
      action.newCard.key = id++;
      return Object.assign({}, state, {
        cards: [...state.cards, action.newCard]
      });
    case SHOW_EDIT_MODAL:
      return Object.assign({}, state, {
        showEditTaskModal: action.id
      });
    case HIDE_EDIT_MODAL:
      return Object.assign({}, state, {
        showEditTaskModal: false
      });
    case EDIT_CARD:
      const editIndex = state.cardList.findIndex(
        card => card.key === action.editedCard.key
      );
      return Object.assign({}, state, {
        cardList: state.cardList
          .slice(0, editIndex)
          .concat(action.editedCard, state.cardList.slice(editIndex + 1))
      });
    default:
      return state;
  }
};

export default cardReducer;
