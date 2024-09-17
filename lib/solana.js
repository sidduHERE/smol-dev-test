```javascript
import { Connection, PublicKey } from '@solana/web3.js';

const SOLANA_CLUSTER = 'https://api.mainnet-beta.solana.com';
const PREDICTION_MARKET_PROGRAM_ID = 'Your Prediction Market Program ID here';

const connection = new Connection(SOLANA_CLUSTER, 'confirmed');

async function getPredictions() {
  const programId = new PublicKey(PREDICTION_MARKET_PROGRAM_ID);
  const accounts = await connection.getProgramAccounts(programId);

  return accounts.map(account => {
    const data = new Uint8Array(account.account.data);
    return {
      publicKey: account.pubkey,
      lamports: account.account.lamports,
      data,
      owner: account.account.owner,
      executable: account.account.executable,
      rentEpoch: account.account.rentEpoch,
    };
  });
}

export { getPredictions };
```