import React from 'react';

const InteractContract = ({ interactContract }) => {
  return (
    <div id="interactContractButton">
      <button onClick={interactContract}>Interact with Contract</button>
    </div>
  );
};

export default InteractContract;