import React from 'react';
import styles from '../styles/PriceChart.module.css';
import { useTradingViewEmbed } from '../lib/tradingView';

const PriceChart = () => {
  const { ref } = useTradingViewEmbed();

  return (
    <div className={styles.priceChartContainer}>
      <div ref={ref} className={styles.tradingViewChart}></div>
    </div>
  );
};

export default PriceChart;