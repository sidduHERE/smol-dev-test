import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© 2022 Solana Prediction Market. All rights reserved.</p>
            <p>Website created with Next.js and Solana blockchain.</p>
        </footer>
    );
}

export default Footer;