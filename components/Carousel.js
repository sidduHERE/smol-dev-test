import React, { useEffect, useState } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = () => {
  const [roundsData, setRoundsData] = useState([]);

  useEffect(() => {
    fetchRoundsData().then(data => setRoundsData(data));
  }, []);

  return (
    <div id="carousel" className={styles.carousel}>
      {roundsData.map((round, index) => (
        <div key={index} className={styles.round}>
          <h3>{round.title}</h3>
          <p>{round.description}</p>
          {round.expired ? (
            <p className={styles.expired}>Round Expired</p>
          ) : round.upcoming ? (
            <p className={styles.upcoming}>Round Upcoming</p>
          ) : (
            <div className={styles.options}>
              <button id="optionLong" className={styles.optionLong}>Go Long</button>
              <button id="optionShort" className={styles.optionShort}>Go Short</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

async function fetchRoundsData() {
  const res = await fetch('/api/rounds');
  const data = await res.json();
  return data;
}

export default Carousel;