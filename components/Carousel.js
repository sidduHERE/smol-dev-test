import React, { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ rounds }) => {
    const [currentRound, setCurrentRound] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const activeRound = rounds.find(round => round.start <= now && round.end > now);
            const nextRound = rounds.find(round => round.start > now);
            if (activeRound) {
                setCurrentRound(activeRound);
            } else if (nextRound) {
                setCurrentRound(nextRound);
            }
        }, 300000); // update every 5 minutes

        return () => clearInterval(interval);
    }, [rounds]);

    return (
        <div className={styles.carousel}>
            {rounds.map((round, index) => (
                <div key={index} className={styles.round}>
                    <h2>{round.name}</h2>
                    <p>{round.description}</p>
                    <button disabled={round.end <= Date.now()}>{currentRound === round ? 'Current Round' : 'Coming Soon'}</button>
                </div>
            ))}
        </div>
    );
};

export default Carousel;