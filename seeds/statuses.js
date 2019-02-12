exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('statuses').insert([
        {
          name: 'IN QUEUE',
          rank: '1'
        },
        {
          name: 'IN PROGRESS',
          rank: '2'
        },
        {
          name: 'DONE',
          rank: '3'
        }
      ]);
    });
};
