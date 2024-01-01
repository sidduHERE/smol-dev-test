import React, { useEffect, useRef } from 'react';
import { embedTradingViewChart } from '../lib/tradingView';
import styles from '../styles/PriceChart.module.css';

const PriceChart = ({ priceData }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (priceData && chartContainerRef.current) {
      embedTradingViewChart(chartContainerRef.current, priceData);
    }
  }, [priceData]);

  return (
    <div className={styles.priceChart} ref={chartContainerRef} id="price-chart">
      {priceData ? null : <p>Loading chart...</p>}
    </div>
  );
};

export default PriceChart;