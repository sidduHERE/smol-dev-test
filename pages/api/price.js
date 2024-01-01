import { NextApiRequest, NextApiResponse } from 'next';
import { getPriceData } from '../../lib/tradingView';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const priceData = await getPriceData('BTCUSD');
    res.status(200).json({ priceData });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching price data' });
  }
}