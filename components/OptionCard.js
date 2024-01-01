import React from 'react';
import styles from '../styles/OptionCard.module.css';

const OptionCard = ({ optionData }) => {
  const { status, option, timeRemaining } = optionData;

  return (
    <div className={styles.optionCard} id="option-card">
      <h2>{option}</h2>
      <p>Status: {status}</p>
      <p>Time Remaining: {timeRemaining}</p>
      <button disabled={status !== 'active'}>Go {option}</button>
    </div>
  );
};

export default OptionCard;