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
      body: '',
      priority_id: '',
      created_by: '',
      assigned_to: ''
    };

    this.generateUserOptions = this.generateUserOptions.bind(this);
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handlePriorityIdOnChange = this.handlePriorityIdOnChange.bind(this);
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

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({
      body: value
    });
  }

  handlePriorityIdOnChange(e) {
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

    const { title, body, priority_id, created_by, assigned_to } = this.state;

    this.props.onAdd({
      title,
      body,
      priority_id: parseInt(priority_id),
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
          Body:
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleBodyOnChange}
          />
          Priority:
          <select onChange={this.handlePriorityIdOnChange}>
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
