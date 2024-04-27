```javascript
import { Connection, PublicKey } from '@solana/web3.js';

const NETWORK = process.env.SOLANA_NETWORK;
const PREDICTION_MARKET_PROGRAM_ID = process.env.PREDICTION_MARKET_PROGRAM_ID;

export function getSolanaConnection() {
    return new Connection(NETWORK);
}

export async function getPredictionMarketProgram() {
    const connection = getSolanaConnection();
    const programId = new PublicKey(PREDICTION_MARKET_PROGRAM_ID);
    const programInfo = await connection.getAccountInfo(programId);
    return programInfo;
}
```