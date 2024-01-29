import React, { useState, useEffect } from 'react';
import PredictionOption from './PredictionOption';
import styles from '../styles/PredictionCarousel.module.css';

const PredictionCarousel = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getPredictions();
    }, 300000); // Fetch new predictions every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getPredictions = async () => {
    // Fetch predictions from Solana chain here
    // This is a placeholder and should be replaced with actual implementation
    const newPredictions = [
      { id: 1, status: 'expired', option: 'long' },
      { id: 2, status: 'upcoming', option: 'short' },
      { id: 3, status: 'current', option: 'long' },
    ];

    setPredictions(newPredictions);
  };

  return (
    <div id="prediction-carousel" className={styles.carousel}>
      {predictions.map((prediction) => (
        <PredictionOption key={prediction.id} prediction={prediction} />
      ))}
    </div>
  );
};

export default PredictionCarousel;