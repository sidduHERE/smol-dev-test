const TradingView = require('tradingview');

const createChart = (symbol, interval, containerId) => {
  new TradingView.widget({
    "container_id": containerId,
    "autosize": true,
    "symbol": symbol,
    "interval": interval,
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "details": true,
    "hotlist": true,
    "calendar": true,
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650"
  });
}

module.exports = {
  createChart
}