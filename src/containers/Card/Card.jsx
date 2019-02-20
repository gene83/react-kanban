import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, showEditModal } from '../../actions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.boundOnDeleteClick = this.props.onDeleteClick.bind(
      null,
      this.props.id
    );
    this.boundOnEditClick = this.props.onEditClick.bind(null, this.props.id);
    this.findCreatedBy = this.findCreatedBy.bind(this);
    this.findPriority = this.findPriority.bind(this);
    this.findAssignedTo = this.findAssignedTo.bind(this);
  }

  findCreatedBy = id => {
    const user = this.props.users.find(user => {
      return user.id === id;
    });
    console.log(id, this.props.users);
    console.log(user);
    return user.first_name;
  };

  findAssignedTo = id => {
    const user = this.props.users.find(user => {
      return user.id === id;
    });

    return user.first_name;
  };

  findPriority = id => {
    const priority = this.props.priorities.find(priority => {
      return priority.id === id;
    });

    return priority.name;
  };

  render() {
    return (
      <div className="card">
        <h4 className="title">{this.props.title}</h4>
        <div className="body"> {this.props.body}</div>
        <div className="priority">
          Priority: {this.findPriority(this.props.priority)}
        </div>
        <div className="createdBy">
          Assigned by: {this.findCreatedBy(this.props.createdBy)}
        </div>
        <button onClick={this.boundOnEditClick}>Edit</button>
        <button onClick={this.boundOnDeleteClick}>Delete</button>
        <div className="assignedTo">
          Assigned To: {this.findAssignedTo(this.props.assignedTo)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    priorities: state.priorities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
      dispatch(deleteCard(id));
    },

    onEditClick: id => {
      dispatch(showEditModal(id));
    }
  };
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;
