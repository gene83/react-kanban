// Update with your config settings.
require('dotenv').config({ path: './.env' });

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.POSTGRESS_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
