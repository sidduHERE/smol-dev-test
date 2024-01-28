import { getWinnersList } from '../lib/db';

export default async function handler(req, res) {
  try {
    const winnersList = await getWinnersList();
    res.status(200).json(winnersList);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving winners list' });
  }
}