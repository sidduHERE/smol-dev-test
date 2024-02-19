import React from 'react';
import styles from '../styles/OptionCard.module.css';

const OptionCard = ({ option }) => {
    const goLong = () => {
        // logic for going long
        console.log('Long position taken');
    };

    const goShort = () => {
        // logic for going short
        console.log('Short position taken');
    };

    return (
        <div className={styles.card}>
            <h2>{option.name}</h2>
            <p>{option.description}</p>
            <button id="long-button" onClick={goLong}>Go Long</button>
            <button id="short-button" onClick={goShort}>Go Short</button>
        </div>
    );
};

export default OptionCard;