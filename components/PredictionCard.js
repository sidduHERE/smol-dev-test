import React from 'react';

const PredictionCard = ({ prediction }) => {
    const { id, title, description, status, options } = prediction;

    return (
        <div id={`prediction-card-${id}`} className="prediction-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="status">
                <span>Status: </span>
                <span>{status}</span>
            </div>
            <div className="options">
                <button disabled={status !== 'active'}>{options.long}</button>
                <button disabled={status !== 'active'}>{options.short}</button>
            </div>
        </div>
    );
};

export default PredictionCard;