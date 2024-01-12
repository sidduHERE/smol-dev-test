import React, { useEffect, useState } from 'react';

const PriceChart = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    fetchPriceData();
  }, []);

  const fetchPriceData = async () => {
    try {
      const response = await fetch('/api/price.js');
      const data = await response.json();
      setPriceData(data);
    } catch (error) {
      console.error('Error fetching price data:', error);
    }
  };

  return (
    <div id="price-chart">
      {priceData ? (
        <iframe
          title="BTC Price Chart"
          src={`https://www.tradingview.com/chart/?symbol=${priceData.symbol}`}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PriceChart;