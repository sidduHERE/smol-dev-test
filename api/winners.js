import { NextApiRequest, NextApiResponse } from 'next';

const winnerData = [
  '@Alkali2-6',
  '@69mishenko69',
  '@Solgad',
  '@Hammaye',
  '@Goutamseervi786',
  '@arden',
  '@Josefni20'
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ winnerData });
}