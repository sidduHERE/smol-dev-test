import React, { useEffect, useState } from 'react';
import { getPredictions } from '../lib/solana.js';

const PredictionCarousel = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetchPredictions();
    const interval = setInterval(fetchPredictions, 300000); // Fetch new predictions every 5 minutes

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const fetchPredictions = async () => {
    const newPredictions = await getPredictions();
    setPredictions(newPredictions);
  };

  return (
    <div id="prediction-carousel">
      {predictions.map((prediction, index) => (
        <div key={index} className={`prediction ${prediction.status}`}>
          <p>{prediction.status === 'expired' ? 'Expired' : prediction.status === 'upcoming' ? 'Upcoming' : 'Current'}</p>
          <p>Long: {prediction.options.long}</p>
          <p>Short: {prediction.options.short}</p>
          <p>Expires in: {prediction.expiry}</p>
        </div>
      ))}
    </div>
  );
};

export default PredictionCarousel;