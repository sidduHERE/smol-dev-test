import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PredictionCard.module.css';

export const Prediction = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expiry: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export function PredictionCard({ prediction }) {
  const { id, title, description, expiry, options } = prediction;

  return (
    <div id={`prediction-card-${id}`} className={styles.predictionCard}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button key={index} className={styles.optionButton}>
            {option}
          </button>
        ))}
      </div>
      <div id={`countdown-${id}`} className={styles.countdown}>
        {expiry.toLocaleString()}
      </div>
    </div>
  );
}

PredictionCard.propTypes = {
  prediction: Prediction.isRequired,
};