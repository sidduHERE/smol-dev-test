import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import OptionCard from '../components/OptionCard';
import AirdropGuide from '../components/AirdropGuide';
import WinnerList from '../components/WinnerList';

export default function Home() {
  const [priceData, setPriceData] = useState(null);
  const [roundData, setRoundData] = useState(null);
  const [optionData, setOptionData] = useState(null);
  const [winnerData, setWinnerData] = useState(null);

  useEffect(() => {
    fetchPriceData();
    fetchRoundData();
    fetchOptionData();
    fetchWinnerData();
  }, []);

  const fetchPriceData = async () => {
    const response = await fetch('/api/price');
    const data = await response.json();
    setPriceData(data);
  };

  const fetchRoundData = async () => {
    const response = await fetch('/api/rounds');
    const data = await response.json();
    setRoundData(data);
  };

  const fetchOptionData = async () => {
    const response = await fetch('/api/options');
    const data = await response.json();
    setOptionData(data);
  };

  const fetchWinnerData = async () => {
    const response = await fetch('/api/winners');
    const data = await response.json();
    setWinnerData(data);
  };

  return (
    <div>
      <Header />
      <PriceChart data={priceData} />
      <Carousel data={roundData} />
      <OptionCard data={optionData} />
      <AirdropGuide />
      <WinnerList data={winnerData} />
      <Footer />
    </div>
  );
}