const TradingView = require('tradingview-scraper');
const tradingView = new TradingView();

async function initTradingView() {
    try {
        await tradingView.on('quote', (symbol, price) => {
            if (symbol === 'BTCUSD') {
                return price;
            }
        });
    } catch (error) {
        console.error(`Failed to initialize TradingView: ${error}`);
    }
}

module.exports = {
    tradingView,
    initTradingView
};