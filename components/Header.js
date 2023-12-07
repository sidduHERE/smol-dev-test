import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <img src="/images/dydx-exchange.jpg" alt="dYdX Exchange" />
                    </a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a>Contact</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;