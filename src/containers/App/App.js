import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanBoard from '../../components/KanbanBoard';
import './App.css';

import { deleteCard } from '../../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
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
    cardList: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
      dispatch(deleteCard(id));
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
