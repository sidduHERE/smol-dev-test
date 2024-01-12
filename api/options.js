import { NextApiRequest, NextApiResponse } from 'next';
import { OptionSchema } from '../schemas/OptionSchema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const optionData = await fetchOptionData();
    res.status(200).json(optionData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}

async function fetchOptionData() {
  // Fetch data from Solana chain or other sources
  // This is a placeholder and needs to be replaced with actual implementation
  const data = [
    {
      id: 'option1',
      name: 'Option 1',
      description: 'This is option 1',
      status: 'coming',
    },
    {
      id: 'option2',
      name: 'Option 2',
      description: 'This is option 2',
      status: 'current',
    },
    {
      id: 'option3',
      name: 'Option 3',
      description: 'This is option 3',
      status: 'expired',
    },
  ];

  return data.map(item => OptionSchema.validate(item));
}