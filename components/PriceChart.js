import React from 'react';

const PriceChart = () => {
    return (
        <div className="price-chart">
            <iframe
                src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_33b20&symbol=BITSTAMP%3ABTCUSD&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=Light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
                style={{ width: '100%', height: '400px', overflow: 'hidden', scrolling: 'no' }}
                frameBorder="0" allowTransparency="true" box-sizing="border-box" />
        </div>
    );
}

export default PriceChart;