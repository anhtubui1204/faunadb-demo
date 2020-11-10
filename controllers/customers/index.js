const getSingleCustomer = require('./get-single-customer')
const getAllCustomers = require('./get-all-customer')
const createCustomer = require('./create-customer')
const updateCustomer = require('./update-customers')
const deleteCustomer = require('./delete-customer')

module.exports = { getAllCustomers, getSingleCustomer, createCustomer, updateCustomer, deleteCustomer }