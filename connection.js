const pgp = require('pg-promise')({
  query(q) {
    console.log(q.query);
  },
});
const config = require('./config/config');

const db = pgp(config);

module.exports = db;
