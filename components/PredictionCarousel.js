import React, { useState, useEffect } from 'react';
import styles from '../styles/PredictionCarousel.module.css';

const PredictionCarousel = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchPredictions();
    }, 300000); // Fetch new predictions every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const fetchPredictions = async () => {
    // Fetch predictions from Solana chain
    // This is a placeholder and should be replaced with actual API call
    const response = await fetch('/api/predictions');
    const data = await response.json();

    setPredictions(data.predictions);
  };

  return (
    <div id="prediction-carousel" className={styles.carousel}>
      {predictions.map((prediction, index) => (
        <div key={index} className={styles.prediction}>
          <h3>{prediction.title}</h3>
          <p>{prediction.description}</p>
          <button disabled={prediction.expired} className={styles.long}>Go Long</button>
          <button disabled={prediction.expired} className={styles.short}>Go Short</button>
        </div>
      ))}
    </div>
  );
};

export default PredictionCarousel;