```javascript
import React from 'react';

const PredictionOption = ({ prediction, onOptionSelect }) => {
  const { id, title, status, options } = prediction;

  const handleOptionSelect = (option) => {
    onOptionSelect(id, option);
  };

  return (
    <div id="prediction-option">
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PredictionOption;
```