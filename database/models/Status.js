const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get teableName() {
    return 'statuses';
  }
  get hasTimestamps() {
    return true;
  }

  cards() {
    return this.hasMany('cards');
  }
}

module.exports = bookshelf.Model('Status', Status);
