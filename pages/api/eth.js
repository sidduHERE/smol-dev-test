import { NextApiRequest, NextApiResponse } from 'next';
import { getEthPrice } from '../../lib/binance.js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const ethPrice = await getEthPrice();
    res.status(200).json({ ethPrice });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ETH price' });
  }
}