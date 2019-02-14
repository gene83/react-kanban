const cards = [
  {
    key: 1,
    title: 'finish react-redux',
    body: '',
    priority: 'blocker',
    createdBy: 'gene',
    assignedTo: 'gene',
    status: 'in_queue'
  },
  {
    key: 2,
    title: 'finish react-redux',
    body: '',
    priority: 'Low',
    createdBy: 'gene',
    assignedTo: 'gene',
    status: 'in_progress'
  },
  {
    key: 3,
    title: 'finish react-redux',
    body: '',
    priority: 'High',
    createdBy: 'gene',
    assignedTo: 'gene',
    status: 'done'
  }
];

const cardReducer = (state = cards, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cardReducer;
