import { getClaimToken } from '../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const claimToken = await getClaimToken();
    return res.status(200).json(claimToken);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}