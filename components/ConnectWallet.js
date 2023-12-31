import React, { useState } from 'react';
import { WalletSchema } from '../lib/solana.js';
import styles from '../styles/ConnectWallet.module.css';

const ConnectWallet = () => {
  const [walletData, setWalletData] = useState(WalletSchema);

  const connectWallet = async () => {
    try {
      // Connect to wallet logic here
      // Update walletData state with the connected wallet data
      setWalletData({
        // connected wallet data
      });
    } catch (error) {
      console.error('Failed to connect wallet', error);
    }
  };

  return (
    <div id="connectWallet" className={styles.container}>
      <button onClick={connectWallet} className={styles.button}>
        Connect Wallet
      </button>
      {walletData.isConnected && (
        <div className={styles.walletInfo}>
          <p>Connected Wallet: {walletData.walletAddress}</p>
          <p>Balance: {walletData.balance}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;