```javascript
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Celestia Airdrop</title>
        <meta name="description" content="Claim Your Free TIA Tokens Now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <PriceChart />
        <Carousel />
      </main>

      <Footer />
    </div>
  )
}
```