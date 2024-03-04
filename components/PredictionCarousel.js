import React, { useState, useEffect } from 'react';

const PredictionCarousel = () => {
    const [predictions, setPredictions] = useState([]);
    const [currentPrediction, setCurrentPrediction] = useState(null);

    useEffect(() => {
        // Fetch predictions from Solana chain
        fetchPredictions();
        // Update predictions every 5 minutes
        const interval = setInterval(fetchPredictions, 300000);
        return () => clearInterval(interval);
    }, []);

    const fetchPredictions = async () => {
        // Replace with actual API call to Solana chain
        const newPredictions = []; // fetched data
        setPredictions(newPredictions);
        setCurrentPrediction(newPredictions[0]);
    };

    const renderPredictions = () => {
        return predictions.map((prediction, index) => {
            const isCurrent = prediction === currentPrediction;
            const isExpired = new Date(prediction.endTime) < new Date();
            let status;
            if (isExpired) {
                status = 'Expired';
            } else if (isCurrent) {
                status = 'Current';
            } else {
                status = 'Upcoming';
            }
            return (
                <div key={index} className={`prediction ${status.toLowerCase()}`}>
                    <h3>{prediction.title}</h3>
                    <p>Status: {status}</p>
                </div>
            );
        });
    };

    return (
        <div id="prediction-carousel">
            {renderPredictions()}
        </div>
    );
};

export default PredictionCarousel;