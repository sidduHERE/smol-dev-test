import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/OptionButton.module.css';

const OptionButton = ({ option, onOptionSelected }) => {
  const handleClick = () => {
    onOptionSelected(option);
  };

  return (
    <button className={styles.optionButton} onClick={handleClick}>
      {option}
    </button>
  );
};

OptionButton.propTypes = {
  option: PropTypes.string.isRequired,
  onOptionSelected: PropTypes.func.isRequired,
};

export default OptionButton;