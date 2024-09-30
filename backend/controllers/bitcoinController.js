const axios = require('axios');
const dotenv = require('dotenv');

const getBitcoinPrice = async (req, res) => {
    try {
        const response = await axios.get('https://api.coinbase.com/api/v3/brokerage/products/BTC-USD');
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching Bitcoin price: ", error);
        res.status(500).json({ error: "Error fetching Bitcoin price" });
    }
};

module.exports = { getBitcoinPrice };