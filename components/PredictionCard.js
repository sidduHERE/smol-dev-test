import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PredictionCard.module.css';

const PredictionCard = ({ round, prediction, onLong, onShort }) => {
  const isExpired = new Date(round.endTime) < new Date();
  const isUpcoming = new Date(round.startTime) > new Date();

  return (
    <div className={styles.predictionCard}>
      <h3 className={styles.roundTitle}>Round {round.id}</h3>
      <p className={styles.roundTime}>
        {new Date(round.startTime).toLocaleString()} - {new Date(round.endTime).toLocaleString()}
      </p>
      {isExpired ? (
        <p className={styles.expiredMessage}>This round has expired.</p>
      ) : isUpcoming ? (
        <p className={styles.upcomingMessage}>This round is upcoming.</p>
      ) : (
        <div className={styles.predictionOptions}>
          <button className={styles.longButton} onClick={onLong} disabled={!!prediction}>
            Go Long
          </button>
          <button className={styles.shortButton} onClick={onShort} disabled={!!prediction}>
            Go Short
          </button>
        </div>
      )}
      {prediction && (
        <p className={styles.predictionMessage}>
          You went {prediction.isLong ? 'long' : 'short'} in this round.
        </p>
      )}
    </div>
  );
};

PredictionCard.propTypes = {
  round: PropTypes.shape({
    id: PropTypes.number.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
  prediction: PropTypes.shape({
    isLong: PropTypes.bool,
  }),
  onLong: PropTypes.func.isRequired,
  onShort: PropTypes.func.isRequired,
};

export default PredictionCard;