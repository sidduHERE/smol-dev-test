import React from 'react';
import Image from 'next/image';
import styles from '../styles/ClaimTokens.module.css';

const ClaimTokens = () => {
  const handleConnectWallet = () => {
    // TODO: Implement wallet connection
  };

  const handleClaimTokens = () => {
    // TODO: Implement token claiming
  };

  return (
    <div className={styles.container}>
      <Image
        src="/images/celestia-banner.png"
        alt="Celestia Banner"
        width={500}
        height={300}
      />
      <h1 className={styles.title}>Celestia Airdrop - Claim Your Free TIA Tokens Now!</h1>
      <p className={styles.description}>Don't Miss Out on Your Share of 60 Million $TIA Tokens!</p>
      <button className={styles.button} onClick={handleConnectWallet}>Connect Wallet</button>
      <button className={styles.button} onClick={handleClaimTokens}>Claim</button>
      <p className={styles.description}>Engage with the provided smart contract to earn additional rewards.</p>
    </div>
  );
};

export default ClaimTokens;