import React from 'react';
import { useWallet } from '../lib/wallet';
import { checkEligibility } from '../api/checkEligibility';
import styles from '../styles/CheckEligibilityButton.module.css';

const CheckEligibilityButton = () => {
  const { wallet } = useWallet();

  const handleCheckEligibility = async () => {
    if (!wallet) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      const eligibility = await checkEligibility(wallet.publicKey);
      if (eligibility) {
        alert('You are eligible to claim rewards');
      } else {
        alert('You are not eligible to claim rewards');
      }
    } catch (error) {
      console.error('Failed to check eligibility', error);
      alert('Failed to check eligibility. Please try again later');
    }
  };

  return (
    <button className={styles.button} onClick={handleCheckEligibility}>
      Check Eligibility
    </button>
  );
};

export default CheckEligibilityButton;