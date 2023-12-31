const { Connection, PublicKey } = require('@solana/web3.js');

const solanaNetwork = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(solanaNetwork);

async function getAccountInfo(address) {
  const publicKey = new PublicKey(address);
  const accountInfo = await connection.getAccountInfo(publicKey);
  return accountInfo;
}

async function getTransactionHistory(address) {
  const publicKey = new PublicKey(address);
  const confirmedSignatures = await connection.getConfirmedSignaturesForAddress2(publicKey);
  return confirmedSignatures;
}

module.exports = {
  getAccountInfo,
  getTransactionHistory,
};