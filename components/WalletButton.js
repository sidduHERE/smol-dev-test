import React from 'react';
import { walletData } from '../pages/api/walletData';
import styles from '../styles/WalletButton.module.css';

const WalletButton = () => {
  const connectWallet = async () => {
    try {
      await window.solana.connect();
      walletData.status = 'connected';
      walletData.address = window.solana.publicKey.toString();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className={styles.walletButton} onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default WalletButton;