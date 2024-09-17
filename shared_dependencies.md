1. Dependencies: 
   - "next": The Next.js framework used for server-rendered React applications.
   - "react": A JavaScript library for building user interfaces.
   - "solana-web3.js": A JavaScript API for interacting with the Solana blockchain.
   - "tradingview": A lightweight and powerful library for embedding TradingView charts.

2. Exported Variables:
   - "PriceChart": Exported from "components/PriceChart.js".
   - "PredictionCarousel": Exported from "components/PredictionCarousel.js".
   - "PredictionOption": Exported from "components/PredictionOption.js".

3. Data Schemas:
   - "Prediction": A schema representing a prediction, including properties for the prediction's status, options, and expiry time.

4. ID Names of DOM Elements:
   - "price-chart": The ID of the DOM element where the TradingView price chart is rendered.
   - "prediction-carousel": The ID of the DOM element where the prediction carousel is rendered.
   - "prediction-option": The ID of the DOM element where the prediction options are rendered.

5. Message Names:
   - "PRICE_UPDATE": A message name for when the BTC price updates.
   - "PREDICTION_EXPIRED": A message name for when a prediction round expires.
   - "NEW_PREDICTION": A message name for when a new prediction round starts.

6. Function Names:
   - "getPrice": A function in "pages/api/price.js" that fetches the current BTC price.
   - "getPredictions": A function in "lib/solana.js" that fetches the current predictions from the Solana blockchain.
   - "renderChart": A function in "lib/tradingView.js" that renders the TradingView price chart.
   - "updateCarousel": A function in "components/PredictionCarousel.js" that updates the carousel when a prediction round expires or a new one starts.
   - "selectOption": A function in "components/PredictionOption.js" that allows the user to select a prediction option.