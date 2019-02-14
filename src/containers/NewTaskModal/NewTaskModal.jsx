import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewTaskModal.css';
import { addCard, hideAddModal } from '../../actions';

class NewTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleCreatedByOnChange = this.handleCreatedByOnChange.bind(this);
    this.handleAssignedToOnChange = this.handleAssignedToOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({
      title: value
    });
  }

  handlePriorityOnChange(e) {
    const value = e.target.value;
    this.setState({
      priority: value
    });
  }

  handleCreatedByOnChange(e) {
    const value = e.target.value;
    this.setState({
      createdBy: value
    });
  }

  handleAssignedToOnChange(e) {
    const value = e.target.value;
    this.setState({
      assignedTo: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, priority, createdBy, assignedTo } = this.state;

    this.props.onAdd({ title, priority, createdBy, assignedTo });

    this.setState({
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    });
  }

  render() {
    return (
      <div className={this.props.newTaskModalDisplay}>
        <form>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleOnChange}
          />
          Priority:
          <select onChange={this.handlePriorityOnChange}>
            <option value="" />
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          Created By:
          <input
            type="text"
            value={this.state.createdBy}
            onChange={this.handleCreatedByOnChange}
          />
          Assigned To:
          <input
            type="text"
            value={this.state.assignedTo}
            onChange={this.handleAssignedToOnChange}
          />
          <button onClick={this.handleSubmit}>Create Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: newCard => {
      dispatch(addCard(newCard));
      dispatch(hideAddModal());
    }
  };
};

NewTaskModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskModal);

export default NewTaskModal;
