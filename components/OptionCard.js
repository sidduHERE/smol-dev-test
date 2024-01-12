import React from 'react';

const OptionCard = ({ optionData }) => {
  return (
    <div id="option-card" className="option-card">
      <h3>{optionData.title}</h3>
      <p>{optionData.description}</p>
      <div className="option-actions">
        <button className="option-action-long" onClick={() => goLong(optionData.id)}>Go Long</button>
        <button className="option-action-short" onClick={() => goShort(optionData.id)}>Go Short</button>
      </div>
    </div>
  );
};

const goLong = (optionId) => {
  // Implement the logic to go long on the option
};

const goShort = (optionId) => {
  // Implement the logic to go short on the option
};

export default OptionCard;