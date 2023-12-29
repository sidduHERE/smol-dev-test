import React from 'react';
import { claimTokens } from '../api/claim';
import '../styles/ClaimButton.module.css';

const ClaimButton = ({ claimData }) => {
  const handleClaim = async () => {
    try {
      const response = await claimTokens(claimData);
      if (response.status === 200) {
        alert('claimSuccess');
      } else {
        alert('claimFailure');
      }
    } catch (error) {
      console.error(error);
      alert('claimFailure');
    }
  };

  return (
    <button id="claimButton" onClick={handleClaim}>
      Claim Now
    </button>
  );
};

export default ClaimButton;