const express = require('express');
const { getBitcoinPrice } = require('../controllers/bitcoinController');
const router = express.Router();

router.get('/bitcoin-price', getBitcoinPrice);

module.exports = router;