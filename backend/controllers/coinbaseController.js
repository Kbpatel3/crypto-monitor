const coinbaseService = require('../services/coinbaseService');

// Get current Bitcoin price
const getCurrentBitcoinPrice = async (req, res) => {
    try {
        const price = await coinbaseService.getCurrentBitcoinPrice();
        res.json({ price });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get historical Bitcoin price
const getHistoricalBitcoinPrice = async (req, res) => {
    const { start, end } = req.query;
    try {
        const history = await coinbaseService.getHistoricalBitcoinPrice(start, end);
        res.json({ history });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getCurrentBitcoinPrice, getHistoricalBitcoinPrice };