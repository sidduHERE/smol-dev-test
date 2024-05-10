```javascript
import { useEffect } from 'react';

const TradingView = ({ symbol }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": symbol,
      "interval": "5",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_btc_chart"
    });

    document.getElementById('tradingview_btc_chart').appendChild(script);
  }, [symbol]);

  return (
    <div id="tradingview_btc_chart" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default TradingView;
```