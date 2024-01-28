import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import Option from '../components/Option';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AltLayer Airdrop Season One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>AltLayer Airdrop Season One Announcement</h1>
        <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*QvP91LW92QLv9_qq" alt="AltLayer Airdrop Season One" />
        <p>Exciting news! AltLayer token (ALT) is set to launch on Binance on January 25, 2024. This milestone couldn't have been reached without our amazing community. Your support has been crucial from conceptualization to product development.</p>
        <p>To show our gratitude, we're inviting you to join the "ALT Token community" through an airdrop for early supporters and partners. Below is a summary:</p>
        <ul>
          <li>Total Allocated ALT Tokens: 300,000,000 (3% of total supply)</li>
          <li>Distribution Categories:
            <ul>
              <li>NFT Holders</li>
              <li>Altitude Campaign Participants</li>
              <li>EigenLayer Restakers</li>
              <li>EigenLayer Ecosystem Partners</li>
              <li>Celestia Stakers and others</li>
            </ul>
          </li>
        </ul>
        <p>For detailed criteria and information, check the full announcement <a href="http://go.altlayerio.online/zHaxVS">here</a>.</p>
        <p><a href="http://go.altlayerio.online/zHaxVS">Claim</a> opens from January 25 to February 25, 2024. Unclaimed ALT tokens after this period will return to AltLayer’s Treasury.</p>
        <p>Thank you for being part of AltLayer's success! More to come in Season One, stay tuned.</p>
        <p>Note: Certain regions are restricted from the airdrop. Please review the disclaimer before participating.</p>
        <PriceChart />
        <Carousel />
        <Option />
      </main>

      <Footer />
    </div>
  )
}