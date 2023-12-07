import { Solana } from '../lib/solana';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(400).send({ message: 'Only GET requests allowed' });
    return;
  }

  try {
    const solana = new Solana();
    const rounds = await solana.getRounds();

    res.status(200).json(rounds);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rounds', error: error.toString() });
  }
}