1. Dependencies: 
   - "next": The Next.js framework used in all pages and components.
   - "react": The React library used in all pages and components.
   - "solana-web3.js": The Solana JavaScript API used in "lib/solana.js".
   - "tradingview": The TradingView library used in "lib/tradingView.js".

2. Exported Variables:
   - "PriceChart" from "components/PriceChart.js".
   - "RoundCarousel" from "components/RoundCarousel.js".
   - "OptionCard" from "components/OptionCard.js".

3. Data Schemas:
   - "priceData" schema used in "pages/api/price.js" and "components/PriceChart.js".
   - "roundData" schema used in "components/RoundCarousel.js".
   - "optionData" schema used in "components/OptionCard.js".

4. ID Names of DOM Elements:
   - "price-chart" in "components/PriceChart.js".
   - "round-carousel" in "components/RoundCarousel.js".
   - "option-card" in "components/OptionCard.js".

5. Message Names:
   - "PRICE_UPDATE" used in "pages/api/price.js" and "components/PriceChart.js".
   - "ROUND_EXPIRED" and "ROUND_COMING" used in "components/RoundCarousel.js".
   - "OPTION_SELECTED" used in "components/OptionCard.js".

6. Function Names:
   - "getPriceData" in "pages/api/price.js" and "components/PriceChart.js".
   - "getRoundData" in "components/RoundCarousel.js".
   - "getOptionData" in "components/OptionCard.js".
   - "connectSolana" in "lib/solana.js".
   - "initTradingView" in "lib/tradingView.js".