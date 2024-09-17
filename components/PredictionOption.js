import React from 'react';

const PredictionOption = ({ prediction, selectOption }) => {
  return (
    <div id="prediction-option">
      <h2>Current Prediction Round</h2>
      <p>{prediction.status}</p>
      <div>
        <button disabled={prediction.status !== 'active'} onClick={() => selectOption('long')}>
          Go Long
        </button>
        <button disabled={prediction.status !== 'active'} onClick={() => selectOption('short')}>
          Go Short
        </button>
      </div>
    </div>
  );
};

export default PredictionOption;