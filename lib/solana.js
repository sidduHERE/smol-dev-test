const solanaWeb3 = require('@solana/web3.js');

const connection = new solanaWeb3.Connection(
  solanaWeb3.clusterApiUrl('mainnet-beta'),
  'confirmed'
);

async function getAccountInfo(address) {
  const publicKey = new solanaWeb3.PublicKey(address);
  const accountInfo = await connection.getAccountInfo(publicKey);
  return accountInfo;
}

async function getTransaction(signature) {
  const transaction = await connection.getTransaction(signature);
  return transaction;
}

module.exports = {
  getAccountInfo,
  getTransaction
};