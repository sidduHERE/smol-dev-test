import React, { useEffect } from 'react';
import { initTradingView } from '../lib/tradingView.js';

const PriceChart = () => {
  useEffect(() => {
    initTradingView('price-chart');
  }, []);

  return (
    <div id="price-chart" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default PriceChart;