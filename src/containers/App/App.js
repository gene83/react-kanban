import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanBoard from '../../components/KanbanBoard';
import Header from '../../components/Header';
import NewTaskModal from '../NewTaskModal';
import EditTaskModal from '../EditTaskModal';
import RegisterModal from '../RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import './App.css';

import {
  toggleAddModal,
  loadCards,
  toggleRegisterModal,
  toggleLoginModal
} from '../../actions';

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
        <LoginModal />

        <Header
          onNewTaskClick={this.props.onNewTaskClick}
          onRegisterClick={this.props.onRegisterClick}
          onLoginClick={this.props.onLoginClick}
        />

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
    },

    onRegisterClick: () => {
      dispatch(toggleRegisterModal());
    },

    onLoginClick: () => {
      dispatch(toggleLoginModal());
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
