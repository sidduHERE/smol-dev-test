import React, { useEffect } from 'react';

const PriceChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BITSTAMP:BTCUSD",
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
    document.getElementById('price-chart').appendChild(script);
  }, []);

  return (
    <div id="price-chart" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default PriceChart;