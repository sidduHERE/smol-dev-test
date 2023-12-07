import React from 'react';
import { connectWallet } from '../lib/wallet';
import styles from '../styles/ConnectWalletButton.module.css';

const ConnectWalletButton = () => {
  const handleConnectWallet = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet', error);
    }
  };

  return (
    <button className={styles.button} onClick={handleConnectWallet}>
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;