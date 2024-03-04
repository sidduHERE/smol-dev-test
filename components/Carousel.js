import React, { useState, useEffect } from 'react';
import PredictionCard from './PredictionCard';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ predictions }) => {
  const [currentRound, setCurrentRound] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRound((currentRound + 1) % predictions.length);
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, [currentRound, predictions.length]);

  return (
    <div id="carousel" className={styles.carousel}>
      {predictions.map((prediction, index) => (
        <PredictionCard
          key={index}
          prediction={prediction}
          disabled={index !== currentRound}
        />
      ))}
    </div>
  );
};

export default Carousel;