var path = require('path');

require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};