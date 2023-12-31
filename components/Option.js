import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Option.module.css';

const Option = ({ optionData }) => {
  return (
    <div className={styles.optionContainer}>
      <div className={styles.option}>
        <h2>{optionData.title}</h2>
        <p>{optionData.description}</p>
        <button className={styles.optionButton} onClick={optionData.action}>
          {optionData.buttonText}
        </button>
      </div>
    </div>
  );
};

Option.propTypes = {
  optionData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired,
};

export default Option;