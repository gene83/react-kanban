import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanBoard from '../../components/KanbanBoard';
import Header from '../../components/Header';
import NewTaskModal from '../NewTaskModal';
import EditTaskModal from '../EditTaskModal';
import './App.css';

import { deleteCard, toggleAddModal, showEditModal } from '../../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewTaskModal />
        <EditTaskModal />

        <Header onNewTaskClick={this.props.onNewTaskClick} />

        <KanbanBoard
          cards={this.props.cards}
          onDeleteClick={this.props.onDeleteClick}
          onEditClick={this.props.onEditClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    newTaskModalDisplay: state.newTaskModalDisplay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
      dispatch(deleteCard(id));
    },

    onNewTaskClick: () => {
      dispatch(toggleAddModal());
    },

    onEditClick: id => {
      dispatch(showEditModal(id));
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
