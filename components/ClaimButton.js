import React from 'react';

const ClaimButton = ({ claimData }) => {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ claimData }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button id="claimButton" onClick={handleClick}>
      Claim
    </button>
  );
};

export default ClaimButton;