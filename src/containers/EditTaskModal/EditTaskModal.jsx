import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideEditModal, editCard, loadUsers } from '../../actions';
import UserOption from '../../components/UserOption';

class EditTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      status_id: '',
      priority_id: '',
      created_by: '',
      assigned_to: ''
    };

    this.generateUserOptions = this.generateUserOptions.bind(this);
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
      return 'modal show-modal';
    }

    return 'modal hide-modal';
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
      status_id: value
    });
  }

  handlePriorityOnChange(e) {
    const value = e.target.value;
    this.setState({
      priority_id: value
    });
  }

  handleCreatedByOnChange(e) {
    const value = e.target.value;
    this.setState({
      created_by: value
    });
  }

  handleAssignedToOnChange(e) {
    const value = e.target.value;
    this.setState({
      assigned_to: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      title,
      body,
      priority_id,
      created_by,
      assigned_to,
      status_id
    } = this.state;

    this.props.onEdit({
      id: this.props.editModalTaskId,
      title,
      body,
      priority_id: parseInt(priority_id),
      status_id: parseInt(status_id),
      created_by: parseInt(created_by),
      assigned_to: parseInt(assigned_to)
    });

    this.setState({
      title: '',
      body: '',
      priority_id: '',
      created_by: '',
      assigned_to: ''
    });

    this.props.closeModal();
  }

  componentDidMount() {
    return this.props.loadUsers();
  }

  generateUserOptions = users => {
    return users.map(user => {
      return (
        <UserOption key={user.id} id={user.id} first_name={user.first_name} />
      );
    });
  };

  render() {
    return (
      <div className={this.makeModalClassName(this.props.editModalTaskId)}>
        <div className="modal-main edit-modal">
          Edit Task: {this.props.editModalTaskId}
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
              <option value="1">In Queue</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
            Priority:
            <select onChange={this.handlePriorityOnChange}>
              <option value="" />
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
              <option value="4">Blocker</option>
            </select>
            CreatedBy:
            <select onChange={this.handleCreatedByOnChange}>
              {this.generateUserOptions(this.props.users)}
            </select>
            Assigned To:
            <select onChange={this.handleAssignedToOnChange}>
              {this.generateUserOptions(this.props.users)}
            </select>
            <button onClick={this.handleSubmit}>Edit Task</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editModalTaskId: state.editModalTaskId,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(hideEditModal());
    },
    onEdit: editedCard => {
      dispatch(editCard(editedCard));
    },
    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

EditTaskModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskModal);

export default EditTaskModal;
