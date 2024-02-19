import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Celestia. All rights reserved.</p>
            <p>Website created for Solana Chain Dapp for Prediction Market</p>
        </footer>
    );
}

export default Footer;