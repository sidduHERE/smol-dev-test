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
      id: account.pubkey.toBase58(),
      status: data[0] === 1 ? 'expired' : data[0] === 2 ? 'coming' : 'current',
      long: data[1] === 1,
      short: data[1] === 2
    };
  });
}

export { getPredictions };