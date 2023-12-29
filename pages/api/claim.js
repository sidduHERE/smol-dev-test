import { NextApiRequest, NextApiResponse } from 'next';
import { ClaimSchema } from '../../schemas/ClaimSchema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const claimData = await ClaimSchema.find({});
    res.status(200).json(claimData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch claim data' });
  }
}