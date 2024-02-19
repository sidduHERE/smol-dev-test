const TradingViewWidget = require('react-tradingview-widget');

const TradingView = () => {
  return (
    <TradingViewWidget
      symbol="BTCUSD"
      theme="dark"
      locale="en"
      autosize
    />
  );
};

module.exports = TradingView;