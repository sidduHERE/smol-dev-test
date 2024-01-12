import { NextApiRequest, NextApiResponse } from 'next';
import { RoundSchema } from '../schemas/RoundSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch round data from Solana chain
    const roundData = await fetchRoundData();

    // Validate the data with the RoundSchema
    const isValid = RoundSchema.validate(roundData);

    if (!isValid) {
      throw new Error('Invalid round data');
    }

    // Send the round data
    res.status(200).json({ roundData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function fetchRoundData() {
  // Implement the logic to fetch round data from Solana chain
  // This is a placeholder and needs to be replaced with actual implementation
  return [
    {
      id: 'round1',
      status: 'expired',
      options: ['long', 'short'],
    },
    {
      id: 'round2',
      status: 'current',
      options: ['long', 'short'],
    },
    {
      id: 'round3',
      status: 'upcoming',
      options: ['long', 'short'],
    },
  ];
}