```javascript
import React, { useState } from 'react';
import { connectWallet, claimTokens, interactWithContract } from '../lib/web3';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Claim.module.css';

export default function Claim() {
    const [message, setMessage] = useState('');

    const handleClaim = async () => {
        try {
            const wallet = await connectWallet();
            const tx = await claimTokens(wallet);
            await interactWithContract(wallet, tx);
            setMessage('claim-success');
        } catch (error) {
            console.error(error);
            setMessage('claim-failure');
        }
    };

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Celestia Airdrop - Claim Your Free TIA Tokens Now!</h1>
                <p className={styles.description}>Don't Miss Out on Your Share of 60 Million $TIA Tokens!</p>
                <button id="claim-button" className={styles.claimButton} onClick={handleClaim}>Claim</button>
                {message && <p className={styles.message}>{message}</p>}
            </main>
            <Footer />
        </div>
    );
}
```