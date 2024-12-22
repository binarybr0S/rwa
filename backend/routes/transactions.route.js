import { Router } from "express";

const router = Router();

const API_BASE_URL = 'http://localhost:3000/api';

router.get("/balance/:address", async (req, res) => {
    const { address } = req.params;
    try {
        const response = await fetch(`${API_BASE_URL}/balance/${address}`);
        const data = await response.json();
        res.status(200).json({
            balance: data.balance
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
});
router.get("/history", async (req, res) => {    
    try {
        const response = await fetch(`${API_BASE_URL}/transactions`);
        const transactions = await response.json();
        res.status(200).json({
            transactions: transactions.map(tx => ({
                from: tx.from,
                to: tx.to,
                amount: tx.amount,
                txHash: tx.txHash,
                timestamp: tx.timestamp
            }))
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
});
router.post("/make-transaction", async (req, res) => {
    const { from, to, amount } = req.body;
    const transaction = {
        from,
        to,
        amount
    };

    try {
        const response = await fetch(`${API_BASE_URL}/transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        });

        const result = await response.json();
        
        if (result.success) {
            res.status(200).json({
                message: 'Transaction successful',
                txHash: result.txHash
            });
        } else {
            res.status(400).json({
                message: result.message
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
});

export { router as transactionsRouter };