const express = require('express');
const { getCurrentBitcoinPrice, getHistoricalBitcoinPrice } = require('../controllers/coinbaseController');
const router = express.Router();

// Route for getting current Bitcoin price
router.get('/current-price', getCurrentBitcoinPrice);

// Route for getting historical Bitcoin price
router.get('/historical-price', getHistoricalBitcoinPrice);

module.exports = router;