import { Connection, PublicKey } from '@solana/web3.js';

const NETWORK = 'https://api.mainnet-beta.solana.com';

export const solana = {
  connection: new Connection(NETWORK, 'confirmed'),

  async connectWallet() {
    if (window.solana === undefined) {
      console.log('Please install Solana wallet extension');
      return;
    }
    if (!window.solana.isPhantom) {
      console.log('Please use Phantom wallet');
      return;
    }
    await window.solana.connect();
    return window.solana.publicKey.toString();
  },

  async disconnectWallet() {
    if (window.solana.isConnected) {
      await window.solana.disconnect();
    }
  },

  async getAccountInfo(publicKey) {
    const accountInfo = await this.connection.getAccountInfo(new PublicKey(publicKey));
    return accountInfo;
  },

  async getBalance(publicKey) {
    const balance = await this.connection.getBalance(new PublicKey(publicKey));
    return balance;
  },
};