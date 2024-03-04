import React, { useState, useEffect } from 'react';
import styles from '../styles/Countdown.module.css';

const Countdown = ({ expiryTimestamp }) => {
  const calculateTimeLeft = () => {
    let difference = +new Date(expiryTimestamp) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.countdown}>
      {timeLeft.minutes ? `${timeLeft.minutes} minutes` : ''}
      {timeLeft.seconds ? `, ${timeLeft.seconds} seconds` : ''} left
    </div>
  );
};

export default Countdown;