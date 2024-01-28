import { getAltLayerToken } from '../lib/db';

export default async function handler(req, res) {
  try {
    const altlayerToken = await getAltLayerToken();
    res.status(200).json(altlayerToken);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching AltLayer token data' });
  }
}