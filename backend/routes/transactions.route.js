import { Router } from "express";
import { Web3 } from "web3";
const router = Router();

const web3 = new Web3("http://127.0.0.1:7545");
let transactionHistory = [];

const _sendTransaction = async (from, to, amount) => {
    try {
        const { from, to, amount } = req.body;
        const amountInWei = web3.utils.toWei(amount.toString(), "ether");
        
        const txHash = await web3.eth.sendTransaction({
            from: from,
            to: to,
            value: amountInWei,
        });

        const transaction = {
            from: from,
            to: to,
            amount: amount,
            txHash: txHash.transactionHash,
            timestamp: new Date().toISOString()
        };

        transactionHistory.push(transaction);
        res.json({ success: true, transaction });
    } catch (error) {
        console.error("Transaction error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}

router.get("/balance/:address", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.address);
        const balanceInEth = web3.utils.fromWei(balance, 'ether');
        res.status(200).json({
            balance: balanceInEth
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
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        const latestBlock = await web3.eth.getBlockNumber();

        transactionHistory = [];

        for (let i = latestBlock; i >= latestBlock - BigInt(100); i--) {
            if (i < 0) break;

            const block = await web3.eth.getBlock(i, true);

            if (block && block.transactionHistory) {
                block.transactionHistory.forEach((tx) => {
                    if (tx.from === account || tx.to === account) {
                        transactionHistory.push({
                            hash: tx.hash,
                            from: tx.from,
                            to: tx.to,
                            value: web3.utils.fromWei(tx.value, "ether"),
                            blockNumber: tx.blockNumber,
                        });
                    }
                });
            }
        }
        res.status(200).json({
            transactionHistory: transactionHistory.map(tx => ({
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
    try {
        const response = _sendTransaction(from, to, amount);

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