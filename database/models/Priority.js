const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get teableName() {
    return 'priorities';
  }
  get hasTimestamps() {
    return true;
  }

  cards() {
    return this.hasMany('cards');
  }
}

module.exports = bookshelf.Model('Priority', Priority);
