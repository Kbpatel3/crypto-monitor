const axios = require('axios');

const headers = {
  'CB-ACCESS-KEY': process.env.COINBASE_API_KEY_NAME,
  'CB-ACCESS-SIGN': process.env.COINBASE_KEY_ID,
  'CB-ACCESS-TIMESTAMP': Math.floor(Date.now() / 1000),
  'CB-VERSION': '2023-09-30'
};

// Get current Bitcoin price
const getCurrentBitcoinPrice = async () => {
  const response = await axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot', { headers });
  return response.data.data.amount;
};

// Get historical Bitcoin price
const getHistoricalBitcoinPrice = async (startDate, endDate) => {
  const response = await axios.get('https://api.coinbase.com/v2/prices/BTC-USD/historic', {
    headers,
    params: { start: startDate, end: endDate }
  });
  return response.data;
};

module.exports = { getCurrentBitcoinPrice, getHistoricalBitcoinPrice };
