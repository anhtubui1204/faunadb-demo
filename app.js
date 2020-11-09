const express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config()

//connect to faunadb
const faunadb = require('faunadb');
const secret = process.env.FAUNADB_SECRET_KEY
const client = new faunadb.Client({ secret })

const app = express()


//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const customers = require('./routes/customers')
app.use('/api/customers', customers)

//port
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});