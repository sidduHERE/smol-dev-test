import React from 'react';
import Head from 'next/head';
import PriceChart from '../components/PriceChart';
import OptionCarousel from '../components/OptionCarousel';
import ClaimTokens from '../components/ClaimTokens';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Celestia Airdrop</title>
        <meta name="description" content="Claim your free TIA tokens now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Celestia Airdrop - Claim Your Free TIA Tokens Now!
        </h1>

        <p className={styles.description}>
          Don't Miss Out on Your Share of 60 Million $TIA Tokens!
        </p>

        <PriceChart />

        <OptionCarousel />

        <ClaimTokens />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bit.ly/celestiarewards"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Celestia
        </a>
      </footer>
    </div>
  );
}