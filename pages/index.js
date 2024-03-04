```javascript
import React from 'react';
import PriceChart from '../components/PriceChart';
import PredictionCarousel from '../components/PredictionCarousel';
import PredictionOption from '../components/PredictionOption';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Solana Prediction Market</h1>
      <PriceChart />
      <PredictionCarousel />
      <PredictionOption />
    </div>
  );
}
```