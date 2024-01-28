import axios from 'axios';

export const fetchBtcPrice = async () => {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    return response.data.bpi.USD.rate_float;
  } catch (error) {
    console.error(error);
  }
};