```javascript
const TradingView = require('tradingview-scraper');

const tradingView = new TradingView();

async function getBTCPrice() {
  const ticker = 'BTCUSD';
  const data = await tradingView.getTicker(ticker);
  return data.price;
}

module.exports = {
  getBTCPrice,
};
```