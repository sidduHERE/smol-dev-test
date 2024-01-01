const { Connection, PublicKey } = require('@solana/web3.js');

const solana = {};

solana.connection = new Connection('https://api.mainnet-beta.solana.com');

solana.getBalance = async (address) => {
  const publicKey = new PublicKey(address);
  const balance = await solana.connection.getBalance(publicKey);
  return balance;
};

solana.getRecentBlockhash = async () => {
  const { blockhash } = await solana.connection.getRecentBlockhash();
  return blockhash;
};

module.exports = solana;