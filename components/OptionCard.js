import React from 'react';
import styles from '../styles/OptionCard.module.css';

const OptionCard = ({ optionData }) => {
  const { title, description, status } = optionData;

  return (
    <div className={styles.optionCard} id="option-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button disabled={status === 'expired'}>Go Long</button>
      <button disabled={status === 'expired'}>Go Short</button>
    </div>
  );
};

export default OptionCard;