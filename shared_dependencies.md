Shared Dependencies:

1. Exported Variables:
   - `priceData`: Data for the BTC price chart.
   - `roundData`: Data for the carousel rounds.
   - `optionData`: Data for the long and short options.
   - `walletData`: Data for the connected wallet.
   - `claimData`: Data for the claim button.

2. Data Schemas:
   - `PriceSchema`: Schema for the price chart data.
   - `RoundSchema`: Schema for the carousel rounds data.
   - `OptionSchema`: Schema for the long and short options data.
   - `WalletSchema`: Schema for the connected wallet data.
   - `ClaimSchema`: Schema for the claim button data.

3. ID Names of DOM Elements:
   - `priceChart`: ID for the price chart element.
   - `carousel`: ID for the carousel element.
   - `optionLong`: ID for the long option element.
   - `optionShort`: ID for the short option element.
   - `connectWallet`: ID for the connect wallet element.
   - `claimButton`: ID for the claim button element.

4. Message Names:
   - `CONNECT_WALLET`: Message for connecting the wallet.
   - `CLAIM_TOKENS`: Message for claiming the tokens.

5. Function Names:
   - `getPriceData()`: Function to get the price data.
   - `getRoundData()`: Function to get the round data.
   - `getOptionData()`: Function to get the option data.
   - `getWalletData()`: Function to get the wallet data.
   - `getClaimData()`: Function to get the claim data.
   - `connectWallet()`: Function to connect the wallet.
   - `claimTokens()`: Function to claim the tokens.

6. Shared Libraries:
   - `next`: Used for server-side rendering.
   - `react`: Used for building user interface.
   - `@solana/web3.js`: Used for interacting with the Solana blockchain.
   - `@binance/connector`: Used for interacting with the Binance blockchain.
   - `tradingview-widget`: Used for displaying the BTC price chart.
   - `react-responsive-carousel`: Used for displaying the carousel.