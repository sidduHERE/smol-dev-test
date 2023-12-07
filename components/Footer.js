import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2022 Solana Prediction Market. All rights reserved.</p>
            <p>Powered by <a href="https://solana.com" target="_blank" rel="noopener noreferrer">Solana</a></p>
        </footer>
    )
}