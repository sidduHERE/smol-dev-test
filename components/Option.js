import React from 'react';

const Option = ({ optionType, disabled }) => {
  return (
    <div id={optionType === 'long' ? 'optionLong' : 'optionShort'} className="option">
      <button disabled={disabled}>
        {optionType === 'long' ? 'Go Long' : 'Go Short'}
      </button>
      <style jsx>{`
        .option {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;
        }
        .option button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: ${optionType === 'long' ? '#4caf50' : '#f44336'};
          color: white;
        }
        .option button:disabled {
          background-color: #ddd;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Option;