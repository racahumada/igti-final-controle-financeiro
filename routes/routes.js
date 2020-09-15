const express = require('express');
const transactionService = require('../services/transactionService');
const transactionRouter = express.Router();

// transactionRouter.get('/', transactionService.findAll);
transactionRouter.post('/', transactionService.insertTransaction);
transactionRouter.get('/', transactionService.findPeriod);
transactionRouter.get('/:id', transactionService.findTransaction);
transactionRouter.put('/:id', transactionService.updateTransaction);
transactionRouter.delete('/:id', transactionService.delTransaction);
module.exports = transactionRouter;
