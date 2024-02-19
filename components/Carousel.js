import React, { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ rounds }) => {
  const [currentRound, setCurrentRound] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRound((currentRound + 1) % rounds.length);
    }, 300000); // change round every 5 minutes

    return () => clearInterval(interval);
  }, [currentRound, rounds.length]);

  return (
    <div className={styles.carousel}>
      {rounds.map((round, index) => (
        <div
          key={index}
          className={`${styles.round} ${index === currentRound ? styles.active : ''}`}
        >
          {index < currentRound ? (
            <p>Round {index + 1}: Expired</p>
          ) : index > currentRound ? (
            <p>Round {index + 1}: Coming Soon</p>
          ) : (
            <p>Round {index + 1}: Current Round</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;