exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('priorities').insert([
        {
          id: 1,
          name: 'low',
          rank: '1'
        },
        {
          id: 2,
          name: 'medium',
          rank: '2'
        },
        {
          id: 3,
          name: 'high',
          rank: '3'
        },
        {
          id: 4,
          name: 'blocker',
          rank: '4'
        }
      ]);
    });
};
