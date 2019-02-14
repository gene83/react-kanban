import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewTaskModal.css';

class NewTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      createdBy: '',
      assignedTo: ''
    };

    // this.newTaskModalDisplay = this.props.newTaskModalDisplay;
  }

  render() {
    return (
      <div className={this.props.newTaskModalDisplay}>
        this is a new task New task modal
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

NewTaskModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskModal);

export default NewTaskModal;
