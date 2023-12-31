const axios = require('axios');

const getPrice = async () => {
  try {
    const response = await axios.get('https://api.tradingview.com/chart');
    const data = response.data;
    const btcPrice = data.ticker.price;
    return btcPrice;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPrice,
};