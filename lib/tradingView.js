const TradingViewWidget = require('react-tradingview-widget');

const getTradingViewChart = (symbol) => {
    return (
        <TradingViewWidget
            symbol={symbol}
            theme="dark"
            locale="en"
            autosize
        />
    );
}

module.exports = {
    getTradingViewChart
}