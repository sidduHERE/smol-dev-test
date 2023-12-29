import React from 'react';
import { WalletSchema } from '../schemas/WalletSchema';
import { walletData } from '../data/walletData';
import { connectWallet } from '../api/wallet';
import styles from '../styles/ConnectWallet.module.css';

const ConnectWallet = () => {
    const [wallet, setWallet] = React.useState(WalletSchema);

    React.useEffect(() => {
        setWallet(walletData);
    }, []);

    const handleConnect = async () => {
        try {
            const connectedWallet = await connectWallet();
            setWallet(connectedWallet);
        } catch (error) {
            console.error('Failed to connect wallet', error);
        }
    };

    return (
        <div className={styles.container}>
            <button id="walletButton" className={styles.button} onClick={handleConnect}>
                {wallet.connected ? 'Disconnect Wallet' : 'Connect Wallet'}
            </button>
            {wallet.connected && (
                <div className={styles.walletInfo}>
                    <p>Connected Wallet: {wallet.address}</p>
                    <p>Balance: {wallet.balance}</p>
                </div>
            )}
        </div>
    );
};

export default ConnectWallet;