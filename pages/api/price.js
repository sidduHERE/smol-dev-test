import { getPrice } from '../../lib/tradingView.js';

export default async function handler(req, res) {
  try {
    const price = await getPrice();
    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch BTC price' });
  }
}