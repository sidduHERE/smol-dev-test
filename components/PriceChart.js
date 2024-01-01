import React, { useEffect, useRef } from 'react';
import styles from '../styles/PriceChart.module.css';

const PriceChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "5",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "price-chart"
    });
    chartRef.current.appendChild(script);
  }, []);

  return (
    <div className={styles.container} id="price-chart" ref={chartRef}></div>
  );
};

export default PriceChart;