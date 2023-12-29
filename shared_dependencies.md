Shared Dependencies:

1. **Exported Variables**: 
   - `roundsData`: Data related to the rounds of the prediction market.
   - `claimData`: Data related to the claim process of the token giveaway.
   - `walletData`: Data related to the user's wallet connection.

2. **Data Schemas**: 
   - `RoundSchema`: Schema for the rounds data.
   - `ClaimSchema`: Schema for the claim data.
   - `WalletSchema`: Schema for the wallet data.

3. **DOM Element IDs**: 
   - `priceChart`: ID for the TradingView iframe.
   - `carousel`: ID for the carousel of rounds.
   - `optionLong`: ID for the option to go long.
   - `optionShort`: ID for the option to go short.
   - `claimButton`: ID for the claim button.
   - `shareButtonTwitter`: ID for the Twitter share button.
   - `shareButtonFacebook`: ID for the Facebook share button.
   - `walletButton`: ID for the wallet connection button.
   - `interactContractButton`: ID for the button to interact with the contract.

4. **Message Names**: 
   - `claimSuccess`: Message displayed after successful claim.
   - `claimFailure`: Message displayed after failed claim.
   - `walletConnected`: Message displayed after successful wallet connection.
   - `walletDisconnected`: Message displayed after wallet disconnection.

5. **Function Names**: 
   - `fetchRoundsData`: Function to fetch rounds data.
   - `fetchClaimData`: Function to fetch claim data.
   - `connectWallet`: Function to connect the wallet.
   - `interactContract`: Function to interact with the contract.
   - `claimTokens`: Function to claim tokens.
   - `shareOnTwitter`: Function to share on Twitter.
   - `shareOnFacebook`: Function to share on Facebook.