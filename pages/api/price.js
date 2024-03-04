import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function getPriceData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    const priceData = response.data.bpi.USD.rate_float
    res.status(200).json({ priceData })
  } catch (error) {
    res.status(500).json({ error: 'Error fetching price data' })
  }
}