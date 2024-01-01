const TradingViewWidget = require('tradingview-widget');
const options = {
  width: 980,
  height: 610,
  symbol: 'COINBASE:BTCUSD',
  interval: 'D',
  timezone: 'Etc/UTC',
  theme: 'Light',
  style: '1',
  locale: 'en',
  toolbar_bg: '#f1f3f6',
  enable_publishing: false,
  allow_symbol_change: true,
  container_id: 'price-chart'
};

function embedTradingViewChart() {
  new TradingViewWidget(options).render();
}

module.exports = {
  embedTradingViewChart
};