const knex = require('knex');
const configuration = require('../../knexfile');

const dbconnection = knex(configuration.development);

module.exports = dbconnection;