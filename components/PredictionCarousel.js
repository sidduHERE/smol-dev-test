import React, { useEffect, useState } from 'react';
import PredictionOption from './PredictionOption';
import { getPredictions, expirePrediction, comingPrediction } from '../lib/solana';

const PredictionCarousel = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      const data = await getPredictions();
      setPredictions(data);
    };

    fetchPredictions();

    const interval = setInterval(() => {
      const expired = predictions.filter(prediction => prediction.expired);
      const coming = predictions.filter(prediction => !prediction.expired && !prediction.active);
      const active = predictions.filter(prediction => prediction.active);

      expired.forEach(prediction => expirePrediction(prediction.id));
      coming.forEach(prediction => comingPrediction(prediction.id));

      setPredictions([...coming, ...active, ...expired]);
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, [predictions]);

  return (
    <div id="prediction-carousel">
      {predictions.map(prediction => (
        <PredictionOption key={prediction.id} prediction={prediction} />
      ))}
    </div>
  );
};

export default PredictionCarousel;