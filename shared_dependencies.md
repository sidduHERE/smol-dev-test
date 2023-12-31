1. Dependencies: 
   - "next": The Next.js framework used for server-rendered React applications.
   - "react": A JavaScript library for building user interfaces.
   - "solana-web3.js": A JavaScript API for interacting with the Solana blockchain.
   - "tradingview": A lightweight and powerful JavaScript library for embedding TradingView charts.

2. Exported Variables:
   - "PriceChart": Exported from "components/PriceChart.js", used in "pages/index.js".
   - "PredictionCarousel": Exported from "components/PredictionCarousel.js", used in "pages/index.js".
   - "PredictionOption": Exported from "components/PredictionOption.js", used in "components/PredictionCarousel.js".

3. Data Schemas:
   - "Prediction": A schema representing a prediction market option, used in "components/PredictionOption.js" and "components/PredictionCarousel.js".

4. ID Names of DOM Elements:
   - "price-chart": ID for the TradingView chart in "components/PriceChart.js".
   - "prediction-carousel": ID for the carousel of prediction options in "components/PredictionCarousel.js".
   - "prediction-option": ID for each prediction option in "components/PredictionOption.js".

5. Message Names:
   - "PRICE_UPDATE": A message name for updating the BTC price, used in "pages/api/price.js" and "lib/solana.js".
   - "PREDICTION_EXPIRED": A message name for expired predictions, used in "components/PredictionCarousel.js" and "lib/solana.js".
   - "PREDICTION_COMING": A message name for upcoming predictions, used in "components/PredictionCarousel.js" and "lib/solana.js".

6. Function Names:
   - "getPrice": A function for getting the current BTC price, used in "pages/api/price.js" and "lib/tradingView.js".
   - "getPredictions": A function for getting the current prediction options, used in "components/PredictionCarousel.js" and "lib/solana.js".
   - "expirePrediction": A function for expiring a prediction, used in "components/PredictionCarousel.js" and "lib/solana.js".
   - "comingPrediction": A function for upcoming predictions, used in "components/PredictionCarousel.js" and "lib/solana.js".