import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [roundData, setRoundData] = useState([]);

  useEffect(() => {
    fetchRoundData();
  }, []);

  const fetchRoundData = async () => {
    const response = await fetch('/api/rounds');
    const data = await response.json();
    setRoundData(data);
  };

  return (
    <div id="round-carousel" className="carousel">
      {roundData.map((round, index) => (
        <div key={index} className={`carousel-item ${round.expired ? 'disabled' : ''}`}>
          <h3>{round.title}</h3>
          <p>{round.description}</p>
          {round.expired ? (
            <p className="round-expired">This round has expired</p>
          ) : round.upcoming ? (
            <p className="round-upcoming">This round is coming up</p>
          ) : (
            <div className="round-options">
              <button className="option-long">Go Long</button>
              <button className="option-short">Go Short</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;