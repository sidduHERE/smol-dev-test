import React from 'react';
import { useRounds } from '../lib/solana.js';
import PredictionCard from './PredictionCard';
import styles from '../styles/Carousel.module.css';

const Carousel = () => {
  const { rounds, isLoading } = useRounds();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carousel}>
      {rounds.map((round, index) => (
        <PredictionCard key={index} round={round} />
      ))}
    </div>
  );
};

export default Carousel;