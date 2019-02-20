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
  toggleLoginModal,
  loadUsers,
  logout
} from '../../actions';

class App extends Component {
  componentDidMount() {
    this.props.loadCards();
    this.props.loadUsers();
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
          currentUser={this.props.currentUser}
          onLogoutClick={this.props.onLogoutClick}
        />

        <KanbanBoard cards={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    newTaskModalDisplay: state.newTaskModalDisplay,
    currentUser: state.currentUser
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
    },

    loadUsers: () => {
      dispatch(loadUsers());
    },

    onLogoutClick: () => {
      dispatch(logout());
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
