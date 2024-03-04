```javascript
import { Connection, PublicKey } from '@solana/web3.js';

const NETWORK = 'https://api.mainnet-beta.solana.com';

export const solana = new Connection(NETWORK);

export async function connectSolana() {
  const version = await solana.getVersion();
  console.log('Connected to Solana version', version['solana-core']);
}

export async function getAccountInfo(address) {
  const publicKey = new PublicKey(address);
  const accountInfo = await solana.getAccountInfo(publicKey);
  return accountInfo;
}
```