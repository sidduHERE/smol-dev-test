import React from 'react';

const PredictionOption = ({ prediction, goLong, goShort }) => {
  return (
    <div id="prediction-option">
      <h2>{prediction.title}</h2>
      <p>{prediction.description}</p>
      <button onClick={() => goLong(prediction.id)}>Go Long</button>
      <button onClick={() => goShort(prediction.id)}>Go Short</button>
    </div>
  );
};

export default PredictionOption;