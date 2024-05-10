import React, { useState, useEffect } from 'react';
import styles from '../styles/PredictionCarousel.module.css';

const PredictionCarousel = () => {
    const [predictions, setPredictions] = useState([]);
    const [currentPrediction, setCurrentPrediction] = useState(null);

    useEffect(() => {
        fetchPredictions();
        const interval = setInterval(fetchPredictions, 300000); // Fetch new predictions every 5 minutes
        return () => clearInterval(interval);
    }, []);

    const fetchPredictions = async () => {
        try {
            const res = await fetch('/api/predictions');
            const data = await res.json();
            setPredictions(data);
            setCurrentPrediction(data[0]);
        } catch (err) {
            console.error(err);
        }
    };

    const handlePredictionClick = (prediction) => {
        setCurrentPrediction(prediction);
    };

    return (
        <div className={styles.carousel}>
            {predictions.map((prediction, index) => (
                <div
                    key={index}
                    className={`${styles.prediction} ${prediction === currentPrediction ? styles.active : ''}`}
                    onClick={() => handlePredictionClick(prediction)}
                >
                    <p>{prediction.title}</p>
                    <p>{prediction.description}</p>
                    <div className={styles.options}>
                        <button className={styles.long}>Long</button>
                        <button className={styles.short}>Short</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PredictionCarousel;