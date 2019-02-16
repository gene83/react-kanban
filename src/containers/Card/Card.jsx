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
  }

  render() {
    return (
      <div className="card">
        <h4 className="title">{this.props.title}</h4>
        <div className="body"> {this.props.body}</div>
        <div className="priority">Priority: {this.props.priority}</div>
        <div className="createdBy">Assigned by: {this.props.createdBy}</div>
        <button onClick={this.boundOnEditClick}>Edit</button>
        <button onClick={this.boundOnDeleteClick}>Delete</button>
        <div className="assignedTo">{this.props.assignedTo}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
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
