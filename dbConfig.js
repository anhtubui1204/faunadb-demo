require('dotenv').config()

//connect to faunadb
const faunadb = require('faunadb');
const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

const dbConfig = (req, res, next) => {
    req.query = faunadb.query;
    req.client = new faunadb.Client({ secret });
    next()
}

module.exports = {q, client};