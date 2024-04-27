import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceChart from '../components/PriceChart';
import PredictionCarousel from '../components/PredictionCarousel';
import ClaimReward from '../components/ClaimReward';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blastoff.zone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <PriceChart />
        <PredictionCarousel />
        <ClaimReward />
      </main>

      <Footer />
    </div>
  )
}