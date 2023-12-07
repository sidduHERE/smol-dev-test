import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import TradingViewChart from '../components/TradingViewChart';
import PredictionCard from '../components/PredictionCard';
import ConnectWalletButton from '../components/ConnectWalletButton';
import ClaimRewardsButton from '../components/ClaimRewardsButton';
import CheckEligibilityButton from '../components/CheckEligibilityButton';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solana Prediction Market</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <TradingViewChart />
        <Carousel />
        <PredictionCard />
        <ConnectWalletButton />
        <ClaimRewardsButton />
        <CheckEligibilityButton />
      </main>

      <Footer />
    </div>
  )
}