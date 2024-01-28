import React, { useEffect, useState } from 'react';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import Option from '../components/Option';
import { fetchBtcPrice, fetchRounds, fetchOptions } from '../api';

export default function Home() {
  const [btcPrice, setBtcPrice] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchBtcPrice().then(setBtcPrice);
    fetchRounds().then(setRounds);
    fetchOptions().then(setOptions);
  }, []);

  return (
    <div>
      <PriceChart price={btcPrice} />
      <Carousel rounds={rounds} />
      <Option options={options} />
    </div>
  );
}