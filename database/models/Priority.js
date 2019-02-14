const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() {
    return 'priorities';
  }
  get hasTimestamps() {
    return true;
  }

  cards() {
    return this.hasMany('cards');
  }
}

module.exports = bookshelf.model('Priority', Priority);
