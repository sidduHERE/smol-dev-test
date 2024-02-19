import React, { useState, useEffect } from 'react';
import OptionCard from './OptionCard';
import styles from '../styles/OptionCarousel.module.css';

const OptionCarousel = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('/api/options')
                .then(response => response.json())
                .then(data => setOptions(data));
        }, 300000); // Fetch new options every 5 minutes

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="option-carousel" className={styles.carousel}>
            {options.map((option, index) => (
                <OptionCard key={index} option={option} />
            ))}
        </div>
    );
};

export default OptionCarousel;