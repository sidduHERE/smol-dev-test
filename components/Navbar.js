import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav id="navbar" className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>Solana Prediction Market</a>
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/price">
                        <a>BTC Price Chart</a>
                    </Link>
                </li>
                <li>
                    <Link href="/prediction">
                        <a>Prediction Carousel</a>
                    </Link>
                </li>
                <li>
                    <Link href="/claim">
                        <a>Claim Airdrop</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;