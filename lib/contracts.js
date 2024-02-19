// lib/contracts.js

const solanaWeb3 = require('@solana/web3.js');

// Replace with your contract's public key
const CONTRACT_PUBLIC_KEY = 'YourContractPublicKey';

// Create a connection to the Solana cluster
const connection = new solanaWeb3.Connection(
  solanaWeb3.clusterApiUrl('mainnet-beta'),
  'confirmed',
);

// Create a PublicKey instance of the contract's public key
const contractPublicKey = new solanaWeb3.PublicKey(CONTRACT_PUBLIC_KEY);

module.exports = {
  connection,
  contractPublicKey,
};