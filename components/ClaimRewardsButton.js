import React from 'react';
import { useWallet } from '../lib/wallet.js';
import { claimRewards } from '../api/claim.js';
import styles from '../styles/ClaimRewardsButton.module.css';

const ClaimRewardsButton = () => {
  const { wallet } = useWallet();

  const handleClaimRewards = async () => {
    if (!wallet) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      await claimRewards(wallet);
      alert('Rewards claimed successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to claim rewards');
    }
  };

  return (
    <button className={styles.button} onClick={handleClaimRewards}>
      Claim Your Rewards Now!
    </button>
  );
};

export default ClaimRewardsButton;