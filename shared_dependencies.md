Shared Dependencies:

1. Exported Variables:
   - `priceData`: Data for the BTC price chart.
   - `roundData`: Data for the carousel rounds.
   - `optionData`: Data for the current options.
   - `winnerData`: Data for the list of winners.

2. Data Schemas:
   - `PriceSchema`: Schema for the price data.
   - `RoundSchema`: Schema for the round data.
   - `OptionSchema`: Schema for the option data.
   - `WinnerSchema`: Schema for the winner data.

3. ID Names of DOM Elements:
   - `price-chart`: ID for the TradingView iframe.
   - `round-carousel`: ID for the carousel of rounds.
   - `option-card`: ID for the option cards.
   - `airdrop-guide`: ID for the airdrop guide.
   - `winner-list`: ID for the list of winners.

4. Message Names:
   - `PRICE_UPDATE`: Message name for price updates.
   - `ROUND_UPDATE`: Message name for round updates.
   - `OPTION_UPDATE`: Message name for option updates.
   - `WINNER_UPDATE`: Message name for winner updates.

5. Function Names:
   - `fetchPriceData()`: Function to fetch price data.
   - `fetchRoundData()`: Function to fetch round data.
   - `fetchOptionData()`: Function to fetch option data.
   - `fetchWinnerData()`: Function to fetch winner data.
   - `connectWallet()`: Function to connect wallet for airdrop.
   - `checkEligibility()`: Function to check airdrop eligibility.
   - `interactContract()`: Function to interact with airdrop contract.
   - `engageRewards()`: Function to engage for extra rewards.