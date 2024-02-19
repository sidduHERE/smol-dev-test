```javascript
import { Solana } from '../../lib/solana';

export default async function handler(req, res) {
  try {
    const solana = new Solana();
    const price = await solana.getPrice();

    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```