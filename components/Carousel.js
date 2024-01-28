import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    fetch('/api/rounds')
      .then(response => response.json())
      .then(data => setRounds(data));
  }, []);

  return (
    <div id="carousel" className="carousel">
      {rounds.map((round, index) => (
        <div key={index} className={`carousel-item ${round.status}`}>
          <h3>{round.name}</h3>
          <p>{round.description}</p>
          {round.status === 'expired' && <p>Round expired</p>}
          {round.status === 'upcoming' && <p>Coming soon</p>}
          {round.status === 'current' && (
            <div>
              <button>Go Long</button>
              <button>Go Short</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;