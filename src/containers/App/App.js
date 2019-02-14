import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanBoard from '../../components/KanbanBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <KanbanBoard cards={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
