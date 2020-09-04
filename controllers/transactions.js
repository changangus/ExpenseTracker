const Transaction = require('../models/Transaction');

// Get all transactions
// Route: GET '/api/v1/transactions'
// Access: public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true, 
            count: transactions.length,
            data: transactions
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}
// Add transactions
// Route: POST '/api/v1/transactions'
// Acess: public
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);
  
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch(error) {
        if (error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    } 
}
// Delete transactions
// Route: DESTROY '/api/v1/transactions/:id'
// Access: public
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        } 

        await transaction.remove();

        res.status(200).json({
            success: true,
            data: []
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}