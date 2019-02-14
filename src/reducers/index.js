import { DELETE_CARD, SHOW_ADD_MODAL } from '../actions';

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

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      const index = state.findIndex(card => card.key === action.key);
      if (index === -1) {
        return state;
      }
      return state.slice(0, index).concat(state.slice(index + 1));
    case SHOW_ADD_MODAL:
      console.log('hit');
      return Object.assign({}, state, {
        newTaskModalDisplay: 'Block'
      });
    default:
      return state;
  }
};

export default cardReducer;
