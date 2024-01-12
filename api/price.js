import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.tradingview.com/chart');
    const priceData = response.data;

    if (!priceData) {
      res.status(404).json({ message: 'No price data found' });
      return;
    }

    res.status(200).json({ priceData });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching price data' });
  }
}