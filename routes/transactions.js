const express = require('express');
const router = express.Router();
const {getTransactions} = require('../controllers/transactions');
const {addTransactions} = require('../controllers/transactions');
const {deleteTransactions} = require('../controllers/transactions');


router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

module.exports = router;