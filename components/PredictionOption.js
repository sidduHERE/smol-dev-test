import React from 'react';

const PredictionOption = ({ prediction }) => {
  const { id, status, option } = prediction;

  return (
    <div id={`prediction-option-${id}`} className={`prediction-option ${status}`}>
      <h3>{option}</h3>
      <button disabled={status !== 'active'}>Go {option}</button>
    </div>
  );
};

export default PredictionOption;