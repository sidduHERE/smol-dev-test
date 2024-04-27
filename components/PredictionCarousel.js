import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PredictionCard from './PredictionCard';
import '../public/styles/PredictionCarousel.css';

const PredictionCarousel = () => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        const fetchPredictions = async () => {
            const response = await axios.get('/api/predictionData.js');
            setPredictions(response.data);
        };

        fetchPredictions();
        const interval = setInterval(fetchPredictions, 300000); // Fetch new predictions every 5 minutes

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return (
        <div id="prediction-carousel" className="carousel">
            {predictions.map((prediction, index) => (
                <PredictionCard key={index} prediction={prediction} />
            ))}
        </div>
    );
};

export default PredictionCarousel;