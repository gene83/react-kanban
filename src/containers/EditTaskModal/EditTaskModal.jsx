import React, { Component } from 'react';

class EditTaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
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

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({
      body: value
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

    const { title, body, priority, createdBy, assignedTo } = this.state;

    this.setState({
      title: '',
      body: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    });
  }

  render() {
    return (
      <div>
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

export default EditTaskModal;
