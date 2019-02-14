import {
  DELETE_CARD,
  SHOW_ADD_MODAL,
  ADD_CARD,
  HIDE_ADD_MODAL
} from '../actions';

const initialState = {
  newTaskModalDisplay: 'hidden',
  cardList: [
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
      const index = state.cardList.findIndex(card => card.key === action.key);
      if (index === -1) {
        return state;
      }
      return Object.assign({}, state, {
        cardList: state.cardList
          .slice(0, index)
          .concat(state.cardList.slice(index + 1))
      });
    case SHOW_ADD_MODAL:
      return Object.assign({}, state, {
        newTaskModalDisplay: 'Block'
      });
    case HIDE_ADD_MODAL:
      return Object.assign({}, state, {
        newTaskModalDisplay: 'hidden'
      });
    case ADD_CARD:
      action.newCard.status = 'In Queue';
      action.newCard.key = id++;
      return Object.assign({}, state, {
        cardList: [...state.cardList, action.newCard]
      });
    default:
      return state;
  }
};

export default cardReducer;
