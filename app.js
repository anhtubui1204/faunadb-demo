const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./dbConfig')

require('dotenv').config()

const app = express()

//connect Db
// app.use(db)

//Morgan middleware
app.use(morgan('dev'))

//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const customers = require('./routes/customers');
app.use('/api/customers', customers)

//port
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});