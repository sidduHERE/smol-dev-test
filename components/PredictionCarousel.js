import React, { useEffect, useState } from 'react';
import { getPredictions } from '../lib/solana.js';

const PredictionCarousel = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      const data = await getPredictions();
      setPredictions(data);
    };

    fetchPredictions();
    const interval = setInterval(fetchPredictions, 300000); // Fetch new predictions every 5 minutes

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div id="prediction-carousel">
      {predictions.map((prediction) => (
        <div key={prediction.id} className={`prediction ${prediction.status}`}>
          <p>{prediction.status === 'expired' ? 'Expired' : prediction.status === 'coming' ? 'Coming Soon' : 'Current'}</p>
          <p>{prediction.long ? 'Long' : 'Short'}</p>
        </div>
      ))}
    </div>
  );
};

export default PredictionCarousel;