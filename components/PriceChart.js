import React, { useEffect } from 'react';
import { renderChart } from '../lib/tradingView.js';

const PriceChart = () => {
  useEffect(() => {
    renderChart('price-chart');
  }, []);

  return (
    <div id="price-chart" />
  );
};

export default PriceChart;