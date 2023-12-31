import React from 'react';
import Head from 'next/head';
import PriceChart from '../components/PriceChart';
import RoundCarousel from '../components/RoundCarousel';
import OptionCard from '../components/OptionCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solana Prediction Market</title>
        <meta name="description" content="Solana chain dapp for prediction market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Solana Prediction Market
        </h1>

        <p className={styles.description}>
          Predict BTC price and make your move
        </p>

        <div className={styles.grid}>
          <PriceChart className={styles.card} />
          <RoundCarousel className={styles.card} />
          <OptionCard className={styles.card} />
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by Solana
      </footer>
    </div>
  )
}