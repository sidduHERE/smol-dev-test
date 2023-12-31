import React, { useState, useEffect } from 'react';
import styles from '../styles/RoundCarousel.module.css';

const RoundCarousel = () => {
  const [roundData, setRoundData] = useState([]);

  useEffect(() => {
    getRoundData();
    const interval = setInterval(() => {
      getRoundData();
    }, 300000); // Fetch new data every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getRoundData = async () => {
    // Fetch round data from your API or Solana contract
    // This is a placeholder and should be replaced with your actual data fetching logic
    const response = await fetch('/api/round');
    const data = await response.json();
    setRoundData(data);
  };

  return (
    <div id="round-carousel" className={styles.carousel}>
      {roundData.map((round, index) => (
        <div key={index} className={styles.round}>
          <h2>{round.title}</h2>
          <p>{round.description}</p>
          <button disabled={round.expired ? true : false}>
            {round.expired ? 'Expired' : round.coming ? 'Coming' : 'Current'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RoundCarousel;