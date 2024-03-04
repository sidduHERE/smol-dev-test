```javascript
import { connectSolana } from '../../lib/solana';

export default async function getPrice(req, res) {
  try {
    const solana = await connectSolana();
    const price = await solana.getPrice('BTC');

    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch BTC price' });
  }
}
```