const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get teableName() {
    return 'users';
  }
  get hasTimestamps() {
    return true;
  }

  cards() {
    return this.hasMany('cards');
  }
}

module.exports = bookshelf.model('User', User);
