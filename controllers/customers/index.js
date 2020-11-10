const getSingleCustomer = require('./get-single-customer')
const getAllCustomers = require('./get-all-customer')
const createCustomer = require('./create-customer')
const updateCustomer = require('./update-customers')

module.exports = { getAllCustomers, getSingleCustomer, createCustomer, updateCustomer }