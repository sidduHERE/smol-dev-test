import { solanaConnection, userWallet } from '../lib/solana';
import { claimRewards } from '../lib/wallet';

export default async function claim(req, res) {
  try {
    const connection = solanaConnection();
    const wallet = userWallet(req.body.walletPrivateKey);

    const transaction = await claimRewards(connection, wallet);

    res.status(200).json({ success: true, transaction });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}