1. Dependencies: 
   - "next": The Next.js framework used across all pages and components.
   - "react": The library used for building user interfaces, used in all components.
   - "solana-web3.js": The library used for interacting with the Solana blockchain, used in "lib/solana.js".
   - "tradingview": The library used for embedding TradingView charts, used in "lib/tradingView.js" and "components/PriceChart.js".

2. Exported Variables:
   - "PriceChart" from "components/PriceChart.js".
   - "PredictionCarousel" from "components/PredictionCarousel.js".
   - "PredictionOption" from "components/PredictionOption.js".

3. Data Schemas:
   - "Prediction" schema used in "components/PredictionCarousel.js" and "components/PredictionOption.js".

4. ID Names of DOM Elements:
   - "price-chart" in "components/PriceChart.js".
   - "prediction-carousel" in "components/PredictionCarousel.js".
   - "prediction-option" in "components/PredictionOption.js".

5. Message Names:
   - "PRICE_UPDATE" used in "pages/api/price.js" and "components/PriceChart.js".
   - "PREDICTION_EXPIRED" and "PREDICTION_UPCOMING" used in "components/PredictionCarousel.js".

6. Function Names:
   - "getPrice" in "pages/api/price.js" and "components/PriceChart.js".
   - "getPredictions" in "components/PredictionCarousel.js".
   - "goLong" and "goShort" in "components/PredictionOption.js".