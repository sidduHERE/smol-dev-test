import { NextApiRequest, NextApiResponse } from 'next'
import { roundsData } from '../../data/roundsData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(roundsData)
}