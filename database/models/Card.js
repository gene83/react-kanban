const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get teableName() {
    return 'cards';
  }
  get hasTimestamps() {
    return true;
  }

  users() {
    return this.belongsTo('users');
  }

  statuses() {
    return this.hasOne('statuses');
  }

  priorities() {
    return this.hasOne('priorities');
  }
}

module.exports = bookshelf.Model('Card', Card);
