import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanBoard from '../../components/KanbanBoard';
import Header from '../../components/Header';
import NewTaskModal from '../NewTaskModal';
import EditTaskModal from '../EditTaskModal';
import RegisterModal from '../RegisterModal';
import './App.css';

import { toggleAddModal, loadCards } from '../../actions';

class App extends Component {
  componentDidMount() {
    return this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <NewTaskModal />
        <EditTaskModal />
        <RegisterModal />
        <Header onNewTaskClick={this.props.onNewTaskClick} />

        <KanbanBoard cards={this.props.cards} />
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
    onNewTaskClick: () => {
      dispatch(toggleAddModal());
    },

    loadCards: () => {
      dispatch(loadCards());
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
