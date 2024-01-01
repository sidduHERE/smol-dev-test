import React, { useState, useEffect } from 'react';
import styles from '../styles/RoundCarousel.module.css';

const RoundCarousel = () => {
  const [roundData, setRoundData] = useState([]);

  useEffect(() => {
    getRoundData();
    const interval = setInterval(() => {
      getRoundData();
    }, 300000); // update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getRoundData = async () => {
    // Fetch round data from Solana chain
    // This is a placeholder and should be replaced with actual Solana API call
    const response = await fetch('/api/round');
    const data = await response.json();
    setRoundData(data);
  };

  return (
    <div id="round-carousel" className={styles.carousel}>
      {roundData.map((round, index) => (
        <div key={index} className={styles.round}>
          <h3>{round.status === 'expired' ? 'Expired' : round.status === 'coming' ? 'Coming' : 'Current'}</h3>
          <p>{round.description}</p>
          {round.status === 'current' && (
            <div className={styles.options}>
              <button className={styles.long}>Go Long</button>
              <button className={styles.short}>Go Short</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoundCarousel;