import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanBoard from '../../components/KanbanBoard';
import Header from '../../components/Header';
import NewTaskModal from '../NewTaskModal';
import './App.css';

import { deleteCard, toggleAddModal } from '../../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewTaskModal />

        <Header onNewTaskClick={this.props.onNewTaskClick} />

        <KanbanBoard
          cardList={this.props.cardList}
          onDeleteClick={this.props.onDeleteClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardList: state.cardList,
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
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
