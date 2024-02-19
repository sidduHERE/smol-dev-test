import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image
                    src="/images/celestia-banner.png"
                    alt="Celestia Banner"
                    width={500}
                    height={300}
                />
            </div>
            <h1 className={styles.title}>Celestia Airdrop - Claim Your Free TIA Tokens Now!</h1>
            <p className={styles.subtitle}>Don't Miss Out on Your Share of 60 Million $TIA Tokens!</p>
            <p className={styles.description}>Celestia, the revolutionary data availability network, is giving away a whopping 60 million $TIA tokens to the community! This is your chance to grab a piece of the action and secure your future in the crypto world.</p>
        </header>
    );
};

export default Header;