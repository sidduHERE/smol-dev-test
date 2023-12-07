1. Dependencies: 
   - "next": The Next.js framework used for server-rendered React applications.
   - "react": A JavaScript library for building user interfaces.
   - "solana-web3.js": A JavaScript API for interacting with the Solana blockchain.
   - "tradingview": A lightweight and powerful JavaScript library for embedding TradingView charts.

2. Exported Variables:
   - "PriceChart": Exported from "components/PriceChart.js".
   - "PredictionCarousel": Exported from "components/PredictionCarousel.js".
   - "PredictionOption": Exported from "components/PredictionOption.js".

3. Data Schemas:
   - "Prediction": A schema representing a prediction market option, including properties for the option's id, status, and whether it's long or short.

4. ID Names of DOM Elements:
   - "price-chart": The id of the DOM element where the TradingView price chart is rendered.
   - "prediction-carousel": The id of the DOM element where the prediction carousel is rendered.
   - "prediction-option": The id of the DOM element where the prediction options are rendered.

5. Message Names:
   - "PRICE_UPDATE": A message name for when the BTC price updates.
   - "PREDICTION_EXPIRED": A message name for when a prediction round expires.
   - "PREDICTION_COMING": A message name for when a new prediction round is about to start.

6. Function Names:
   - "getPrice": A function in "pages/api/price.js" that fetches the current BTC price.
   - "getPredictions": A function in "lib/solana.js" that fetches the current prediction options from the Solana blockchain.
   - "initTradingView": A function in "lib/tradingView.js" that initializes the TradingView chart.