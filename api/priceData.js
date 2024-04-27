const axios = require('axios');

const PriceDataSchema = {
  type: 'object',
  properties: {
    btcPrice: { type: 'number' },
    timestamp: { type: 'string' },
  },
  required: ['btcPrice', 'timestamp'],
};

async function getPriceData() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const priceData = {
      btcPrice: response.data.bpi.USD.rate_float,
      timestamp: response.data.time.updatedISO,
    };
    return priceData;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getPriceData,
  PriceDataSchema,
};