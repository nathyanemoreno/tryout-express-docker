var knex = require("knex");
const pg = require("../config/database");
const db = require("../config/database");

const database = knex({
  client: 'pg',
  connection: {
    host: pg.host,
    user: pg.username,
    password: pg.password,
    database: pg.database
  }
});

module.exports = database;