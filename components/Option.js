import React from 'react';

const Option = ({ optionType, disabled, onClick }) => {
  return (
    <button 
      id={`option-${optionType}`} 
      disabled={disabled} 
      onClick={onClick}
      className={`option ${optionType}`}
    >
      {optionType.charAt(0).toUpperCase() + optionType.slice(1)}
    </button>
  );
};

export default Option;