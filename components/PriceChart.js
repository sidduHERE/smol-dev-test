import React from 'react';

const PriceChart = () => {
    return (
        <div id="price-chart">
            <iframe
                src="https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT"
                height="450"
                width="800"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                allowfullscreen
            >
            </iframe>
        </div>
    );
};

export default PriceChart;