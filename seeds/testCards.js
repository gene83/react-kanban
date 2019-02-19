exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1,
          title: 'test task',
          body: 'empty',
          priority_id: 4,
          status_id: 1,
          created_by: 1,
          assigned_to: 2
        },
        {
          id: 2,
          title: 'test task',
          body: 'empty',
          priority_id: 3,
          status_id: 2,
          created_by: 2,
          assigned_to: 3
        },
        {
          id: 3,
          title: 'test task',
          body: 'empty',
          priority_id: 2,
          status_id: 3,
          created_by: 3,
          assigned_to: 1
        },
        {
          id: 4,
          title: 'test task',
          body: 'empty',
          priority_id: 1,
          status_id: 1,
          created_by: 1,
          assigned_to: 1
        }
      ]);
    });
};
