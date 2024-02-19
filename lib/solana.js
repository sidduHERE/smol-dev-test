```javascript
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

const NETWORK = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(NETWORK);

export async function getBalance(address) {
  const publicKey = new PublicKey(address);
  const balance = await connection.getBalance(publicKey);
  return balance;
}

export async function sendTransaction(fromAddress, toAddress, amount) {
  const fromPublicKey = new PublicKey(fromAddress);
  const toPublicKey = new PublicKey(toAddress);
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromPublicKey,
      toPubkey: toPublicKey,
      lamports: amount,
    }),
  );

  const { blockhash } = await connection.getRecentBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = fromPublicKey;

  const signedTransaction = await fromWallet.signTransaction(transaction);
  const transactionId = await sendAndConfirmTransaction(connection, signedTransaction, [fromWallet]);

  return transactionId;
}
```