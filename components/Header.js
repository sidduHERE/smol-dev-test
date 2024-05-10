```javascript
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logo}>Prediction Market</a>
            </Link>
            <nav className={styles.nav}>
                <Link href="/btc">
                    <a className={styles.navLink}>BTC Price</a>
                </Link>
                <Link href="/eth">
                    <a className={styles.navLink}>ETH Price</a>
                </Link>
                <Link href="https://app.bnbinchain.com/en/bnb-staking?utm_source=email&utm_campaign=leads&utm_id=github">
                    <a className={styles.navLink} target="_blank" rel="noopener noreferrer">Stake on Binance</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
```