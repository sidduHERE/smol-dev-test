```javascript
import { Connection, PublicKey } from '@solana/web3.js';

const SOLANA_NETWORK = 'https://api.mainnet-beta.solana.com';

export const connection = new Connection(SOLANA_NETWORK);

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

export async function getRecentBlockhash() {
  const { blockhash } = await connection.getRecentBlockhash();
  return blockhash;
}
```