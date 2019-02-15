import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideEditModal, editCard } from '../../actions';

class EditTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      status: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handleStatusOnChange = this.handleStatusOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleCreatedByOnChange = this.handleCreatedByOnChange.bind(this);
    this.handleAssignedToOnChange = this.handleAssignedToOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeModalClassName(show) {
    if (show) {
      return 'edit-modal show-modal';
    }

    return 'edit-modal hide-modal';
  }

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({
      title: value
    });
  }

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({
      body: value
    });
  }

  handleStatusOnChange(e) {
    const value = e.target.value;
    this.setState({
      status: value
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

    const { title, body, priority, createdBy, assignedTo, status } = this.state;

    this.props.onEdit({
      key: this.props.showEditTaskModal,
      title,
      body,
      priority,
      status,
      createdBy,
      assignedTo
    });

    this.setState({
      title: '',
      body: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    });

    this.props.closeModal();
  }

  render() {
    return (
      <div className={this.makeModalClassName(this.props.showEditTaskModal)}>
        Edit Task: {this.props.showEditTaskModal}
        <form>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleOnChange}
          />
          Body:
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleBodyOnChange}
          />
          Status:
          <select onChange={this.handleStatusOnChange}>
            <option value="In Queue">In Queue</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          Priority:
          <select onChange={this.handlePriorityOnChange}>
            <option value="" />
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          CreatedBy:
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
          <button onClick={this.handleSubmit}>Edit Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showEditTaskModal: state.showEditTaskModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(hideEditModal());
    },
    onEdit: editedCard => {
      dispatch(editCard(editedCard));
    }
  };
};

EditTaskModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskModal);

export default EditTaskModal;
