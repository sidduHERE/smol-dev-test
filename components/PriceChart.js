import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';
import styles from '../styles/PriceChart.module.css';

const PriceChart = () => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io('/api/price');

    socket.current.on('PRICE_UPDATE', (price) => {
      console.log(`New price: ${price}`);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  return (
    <div id="price-chart" className={styles.priceChart}>
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          symbol: 'BITSTAMP:BTCUSD',
          interval: '5',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'price-chart'
        }}
      />
    </div>
  );
};

export default PriceChart;