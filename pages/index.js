import React, { useEffect, useState } from 'react';
import PriceChart from '../components/PriceChart';
import PredictionCarousel from '../components/PredictionCarousel';
import PredictionOption from '../components/PredictionOption';
import { getPredictions } from '../lib/solana';
import '../styles/global.css';

export default function Home() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    async function fetchPredictions() {
      const data = await getPredictions();
      setPredictions(data);
    }
    fetchPredictions();
    const interval = setInterval(fetchPredictions, 300000); // Fetch new predictions every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <PriceChart id="price-chart" />
      <PredictionCarousel id="prediction-carousel" predictions={predictions} />
      {predictions.map((prediction) => (
        <PredictionOption key={prediction.id} id="prediction-option" prediction={prediction} />
      ))}
    </div>
  );
}