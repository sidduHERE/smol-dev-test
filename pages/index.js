import React, { useEffect, useState } from 'react';
import PriceChart from '../components/PriceChart';
import PredictionCarousel from '../components/PredictionCarousel';
import PredictionOption from '../components/PredictionOption';
import { getPredictions } from '../lib/solana';

export default function Home() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    async function fetchPredictions() {
      const data = await getPredictions();
      setPredictions(data);
    }

    fetchPredictions();
    const interval = setInterval(fetchPredictions, 300000); // Fetch every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <PriceChart />
      <PredictionCarousel predictions={predictions} />
      {predictions.map((prediction, index) => (
        <PredictionOption key={index} prediction={prediction} />
      ))}
    </div>
  );
}