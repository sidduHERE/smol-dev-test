import React, { useEffect, useState } from 'react';
import { fetchBtcPrice } from '../api/btcPrice';

const PriceChart = () => {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const price = await fetchBtcPrice();
      setBtcPrice(price);
    }, 300000); // Fetch price every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="price-chart">
      {btcPrice ? (
        <iframe
          title="BTC Price Chart"
          src={`https://www.tradingview.com/chart/?symbol=BTCUSD=${btcPrice}`}
          frameBorder="0"
        />
      ) : (
        <p>Loading BTC price chart...</p>
      )}
    </div>
  );
};

export default PriceChart;