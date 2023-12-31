import { NextApiRequest, NextApiResponse } from 'next';

// Mock data for BTC price
const priceData = {
  price: 50000,
  timestamp: Date.now(),
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Simulate price update every 5 minutes
  setInterval(() => {
    priceData.price = Math.floor(Math.random() * 60000) + 40000;
    priceData.timestamp = Date.now();
  }, 300000);

  res.status(200).json(priceData);
}