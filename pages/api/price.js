import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const btcPrice = response.data.bpi.USD.rate_float;
    res.status(200).json({ btcPrice });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching BTC price' });
  }
}