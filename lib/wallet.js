```javascript
import { Connection, PublicKey, Keypair } from '@solana/web3.js';

export const NETWORK = 'https://api.mainnet-beta.solana.com';

export const connection = new Connection(NETWORK);

export const generateWallet = () => {
  const wallet = Keypair.generate();
  return wallet;
};

export const getWalletBalance = async (wallet) => {
  const balance = await connection.getBalance(new PublicKey(wallet.publicKey));
  return balance;
};

export const connectWallet = async (wallet) => {
  const publicKey = new PublicKey(wallet.publicKey);
  const balance = await getWalletBalance(wallet);
  return { publicKey, balance };
};
```