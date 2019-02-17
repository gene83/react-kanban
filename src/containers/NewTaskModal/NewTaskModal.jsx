import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewTaskModal.css';
import { addCard, toggleAddModal, loadUsers } from '../../actions';
import UserOption from '../../components/UserOption';

class NewTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };

    this.generateUserOptions = this.generateUserOptions.bind(this);
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleCreatedByOnChange = this.handleCreatedByOnChange.bind(this);
    this.handleAssignedToOnChange = this.handleAssignedToOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeModalClassname(show) {
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

    this.props.closeModal();
  }

  componentDidMount() {
    return this.props.loadUsers;
  }

  generateUserOptions = users => {
    return users.map(user => {
      return <UserOption id={user.id} first_name={user.first_name} />;
    });
  };

  render() {
    return (
      <div className={this.makeModalClassname(this.props.showNewTaskModal)}>
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
          <button onClick={this.handleSubmit}>Create Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showNewTaskModal: state.showNewTaskModal,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: newCard => {
      dispatch(addCard(newCard));
    },

    closeModal: () => {
      dispatch(toggleAddModal());
    },

    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

NewTaskModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskModal);

export default NewTaskModal;
