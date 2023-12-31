import React from 'react';
import Head from 'next/head';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import Option from '../components/Option';
import ConnectWallet from '../components/ConnectWallet';
import ClaimButton from '../components/ClaimButton';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solana Prediction Market</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Solana Prediction Market</h1>
        <PriceChart id="priceChart" />
        <Carousel id="carousel" />
        <Option id="optionLong" type="long" />
        <Option id="optionShort" type="short" />
        <ConnectWallet id="connectWallet" />
        <ClaimButton id="claimButton" />
      </main>

      <footer>
        <p>Powered by Solana</p>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const priceData = await getPriceData();
  const roundData = await getRoundData();
  const optionData = await getOptionData();
  const walletData = await getWalletData();
  const claimData = await getClaimData();

  return {
    props: {
      priceData,
      roundData,
      optionData,
      walletData,
      claimData
    }
  }
}