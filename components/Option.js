import React from 'react';
import styles from '../styles/Option.module.css';

const Option = ({ option, onOptionSelected }) => {
    return (
        <div className={styles.option}>
            <button 
                className={styles.button} 
                disabled={option.disabled} 
                onClick={() => onOptionSelected(option.name)}
            >
                {option.name}
            </button>
            <p className={styles.description}>{option.description}</p>
        </div>
    );
};

export default Option;