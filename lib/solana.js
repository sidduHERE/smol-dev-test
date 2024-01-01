import { Connection, PublicKey } from '@solana/web3.js';

const network = "https://api.mainnet-beta.solana.com";

export const connectToSolana = async () => {
  const connection = new Connection(network, 'confirmed');
  const version = await connection.getVersion();
  console.log('Connection to network established:', network, version);
  return connection;
};

export const getAccountInfo = async (publicKey) => {
  const connection = await connectToSolana();
  const accountInfo = await connection.getAccountInfo(new PublicKey(publicKey));
  return accountInfo;
};