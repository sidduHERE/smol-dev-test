import React from 'react';

const Option = ({ option }) => {
  const { id, type, status } = option;

  return (
    <div id={`option-${id}`} className={`option ${type} ${status}`}>
      <h3>{type.toUpperCase()}</h3>
      <p>{status === 'disabled' ? 'Coming soon...' : 'Available now'}</p>
    </div>
  );
};

export default Option;