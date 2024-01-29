import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const data = await response.json();
    const price = data.bpi.USD.rate_float;

    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch BTC price' });
  }
}