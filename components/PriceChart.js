import React, { useEffect, useRef } from 'react';
import { initTradingView } from '../lib/tradingView';
import styles from '../styles/PriceChart.module.css';

const PriceChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) {
      initTradingView(chartRef.current);
    }
  }, []);

  return (
    <div id="price-chart" className={styles.priceChart} ref={chartRef}></div>
  );
};

export default PriceChart;