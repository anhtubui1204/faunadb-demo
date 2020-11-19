const express = require('express')
const router = express.Router()

const { authMiddleware } = require('../middlewares/auth')
const { getAllCustomers, getSingleCustomer, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customers');

router.get('/', getAllCustomers)
router.get('/:id', getSingleCustomer)
router.post('/', createCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router