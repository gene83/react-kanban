const bookshelf = require('./bookshelf');
require('./User');
require('./Priority');
require('./Status');

class Card extends bookshelf.Model {
  get tableName() {
    return 'cards';
  }
  get hasTimestamps() {
    return true;
  }

  createdBy() {
    return this.belongsTo('User', 'created_by', 'id');
  }

  assignedTo() {
    return this.belongsTo('User', 'assigned_to', 'id');
  }

  status() {
    return this.hasOne('Status', 'id', 'status_id');
  }

  priority() {
    return this.hasOne('Priority', 'id', 'priority_id');
  }
}

module.exports = bookshelf.model('Card', Card);
