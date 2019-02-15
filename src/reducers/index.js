import { DELETE_CARD, TOGGLE_ADD_MODAL, ADD_CARD } from '../actions';

const initialState = {
  showNewTaskModal: false,
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
    case TOGGLE_ADD_MODAL:
      return Object.assign({}, state, {
        showNewTaskModal: !state.showNewTaskModal
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
