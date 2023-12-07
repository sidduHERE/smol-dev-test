import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const data = await response.json();
    const btcPrice = data.bpi.USD.rate_float;
    res.status(200).json({ btcPrice });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching BTC price' });
  }
}