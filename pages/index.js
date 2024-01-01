```javascript
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PriceChart from '../components/PriceChart';
import PredictionCarousel from '../components/PredictionCarousel';
import ClaimAirdrop from '../components/ClaimAirdrop';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <PriceChart />
        <PredictionCarousel />
        <ClaimAirdrop />
      </main>
      <Footer />
    </div>
  );
}
```