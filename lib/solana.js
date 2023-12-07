```javascript
import { Connection, PublicKey } from '@solana/web3.js';

const NETWORK = 'https://api.mainnet-beta.solana.com';

export const connection = new Connection(NETWORK);

export async function getAccountInfo(address) {
  const publicKey = new PublicKey(address);
  const accountInfo = await connection.getAccountInfo(publicKey);
  return accountInfo;
}

export async function getBalance(address) {
  const publicKey = new PublicKey(address);
  const balance = await connection.getBalance(publicKey);
  return balance;
}
```