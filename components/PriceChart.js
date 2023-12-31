import React, { useEffect, useState } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const PriceChart = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    getPriceData();
  }, []);

  const getPriceData = async () => {
    const response = await fetch('/api/price');
    const data = await response.json();
    setPriceData(data);
  };

  return (
    <div id="priceChart">
      <TradingViewWidget
        symbol="BTCUSD"
        theme={Themes.DARK}
        locale="en"
        autosize
      />
    </div>
  );
};

export default PriceChart;