import React, { useEffect } from 'react';
import { useTradingViewEmbed } from '../lib/tradingView';
import styles from '../styles/PriceChart.module.css';

const PriceChart = () => {
  const { embedWidget } = useTradingViewEmbed();

  useEffect(() => {
    embedWidget('price-chart', {
      symbol: 'BITSTAMP:BTCUSD',
      interval: '5',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      hide_top_toolbar: true,
      save_image: false,
      container_id: 'price-chart'
    });
  }, [embedWidget]);

  return (
    <div id="price-chart" className={styles.priceChart}></div>
  );
};

export default PriceChart;