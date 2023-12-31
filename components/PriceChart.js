import React, { useEffect, useRef } from 'react';
import { initTradingView } from '../lib/tradingView';
import styles from '../styles/PriceChart.module.css';

const PriceChart = ({ priceData }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (priceData && chartRef.current) {
      initTradingView(chartRef.current, priceData);
    }
  }, [priceData]);

  return (
    <div className={styles.priceChart} id="price-chart" ref={chartRef}></div>
  );
};

export default PriceChart;