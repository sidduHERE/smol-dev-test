import { solanaConnection } from '../lib/solana';

export default async function checkEligibility(req, res) {
  const { walletAddress } = req.body;

  try {
    const accountInfo = await solanaConnection.getAccountInfo(walletAddress);
    const eligibility = accountInfo ? true : false;

    res.status(200).json({ eligibility });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check eligibility' });
  }
}