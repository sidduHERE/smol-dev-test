```javascript
import React from 'react';
import styles from '../styles/OptionCard.module.css';

const OptionCard = ({ option }) => {
  const { id, status, type, expiry } = option;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Option {id}</h3>
      <p className={styles.status}>Status: {status}</p>
      <p className={styles.type}>Type: {type}</p>
      <p className={styles.expiry}>Expiry: {expiry}</p>
      <button className={styles.button} disabled={status !== 'active'}>
        {status === 'active' ? 'Go ' + type : 'Expired'}
      </button>
    </div>
  );
};

export default OptionCard;
```