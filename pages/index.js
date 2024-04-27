import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getSolanaConnection } from '../lib/solana';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import Option from '../components/Option';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [price, setPrice] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [currentOption, setCurrentOption] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await axios.get('/api/price');
      setPrice(response.data.price);
    };

    const fetchRounds = async () => {
      const connection = getSolanaConnection();
      const roundsData = await connection.getProgramAccounts(
        'predictionMarketProgramId'
      );
      setRounds(roundsData);
    };

    fetchPrice();
    fetchRounds();

    const priceInterval = setInterval(fetchPrice, 300000);
    const roundsInterval = setInterval(fetchRounds, 300000);

    return () => {
      clearInterval(priceInterval);
      clearInterval(roundsInterval);
    };
  }, []);

  const handleOptionSelect = (option) => {
    setCurrentOption(option);
  };

  return (
    <div className={styles.container}>
      <img src="/images/mockup.jpg" alt="Mockup" className={styles.mockup} />
      <PriceChart price={price} />
      <Carousel rounds={rounds} onOptionSelect={handleOptionSelect} />
      {currentOption && <Option option={currentOption} />}
    </div>
  );
}