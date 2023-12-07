import React from 'react';

const PredictionOption = ({ prediction }) => {
  const { id, status, isLong } = prediction;

  return (
    <div id={`prediction-option-${id}`} className={`prediction-option ${status}`}>
      <h3>{`Option ${id}`}</h3>
      <p>{`Status: ${status}`}</p>
      <p>{`Type: ${isLong ? 'Long' : 'Short'}`}</p>
      <button disabled={status !== 'active'}>{isLong ? 'Go Long' : 'Go Short'}</button>
    </div>
  );
};

export default PredictionOption;