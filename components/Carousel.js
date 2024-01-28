import React, { useEffect, useState } from 'react';
import { fetchRounds } from '../api/rounds';

const Carousel = () => {
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRounds().then(setRounds);
    }, 300000); // Fetch new rounds every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carousel">
      {rounds.map((round, index) => (
        <div key={index} className={`carousel-item ${round.expired ? 'disabled' : ''}`}>
          <h2>{round.name}</h2>
          <p>{round.expired ? 'This round has expired.' : 'This round is active.'}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;