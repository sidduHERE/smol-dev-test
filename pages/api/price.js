import { NextApiRequest, NextApiResponse } from 'next';
import { getPriceData } from '../../lib/solana';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const priceData = await getPriceData();
    res.status(200).json(priceData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}