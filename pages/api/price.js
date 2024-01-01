import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const priceData = response.data.price;
    res.status(200).json({ message: 'PRICE_UPDATE', priceData });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching price data', error: error.message });
  }
}