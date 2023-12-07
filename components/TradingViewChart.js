import React, { useEffect, useRef } from 'react';

const TradingViewChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.innerHTML = `
      new TradingView.widget({
        "width": 980,
        "height": 610,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_${Date.now()}"
      });
    `;
    chartRef.current.appendChild(script);
  }, []);

  return <div id="tradingview-chart" ref={chartRef} />;
};

export default TradingViewChart;