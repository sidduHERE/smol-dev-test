import React from 'react';
import styles from '../styles/StakingBanner.module.css';

const StakingBanner = () => {
    return (
        <div className={styles.banner}>
            <h2>🚀 Double Your ETH with Binance Staking</h2>
            <p>Earn rewards and secure your financial future by staking your ETH with Binance. By participating in the Binance staking program, you can potentially double your ETH while supporting the blockchain network.</p>
            <a href="https://app.bnbinchain.com/en/bnb-staking?utm_source=email&utm_campaign=leads&utm_id=github" target="_blank" rel="noopener noreferrer">
                <img src="/images/banner.png" alt="Start Staking Now" />
            </a>
            <p>Click the banner above to learn more and start staking your ETH with Binance today!</p>
            <h3>How to Stake on Binance:</h3>
            <ol>
                <li>
                    <a href="https://app.bnbinchain.com/en/bnb-staking?utm_source=email&utm_campaign=leads&utm_id=github" target="_blank" rel="noopener noreferrer">
                        Visit the Official Binance Staking Page
                    </a>
                </li>
                <li>Connect Your Wallet: Ensure you have a wallet with sufficient ETH, then securely connect it to Binance.</li>
                <li>Interact with the Staking Method: Follow the instructions to use the "connect" method and begin staking your ETH from your wallet balance.</li>
            </ol>
        </div>
    );
};

export default StakingBanner;