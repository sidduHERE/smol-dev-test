import React, { useEffect, useRef } from 'react';
import { getTradingViewChart } from '../lib/tradingView';

const PriceChart = ({ priceData }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (priceData && chartContainerRef.current) {
      getTradingViewChart(chartContainerRef.current, priceData);
    }
  }, [priceData]);

  return (
    <div id="price-chart" ref={chartContainerRef} />
  );
};

export default PriceChart;