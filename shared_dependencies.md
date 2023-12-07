1. Dependencies: These are the libraries or packages that the application will need to function properly. For this project, the dependencies include Next.js (for server-side rendering and static site generation), Solana web3.js (for interacting with the Solana blockchain), and TradingView (for displaying the BTC price chart).

2. Exported Variables: These are the variables that are shared across different files. They include the Solana connection object, the user's wallet object, and the current round of predictions.

3. Data Schemas: These define the structure of the data used in the application. For this project, the data schemas include the Prediction schema (which includes fields for the prediction ID, the user's wallet address, and whether the user went long or short), and the Round schema (which includes fields for the round ID, the start and end times, and the list of predictions).

4. DOM Element IDs: These are the unique identifiers for elements in the HTML document. They include IDs for the TradingView chart, the carousel of rounds, and the buttons for connecting the wallet, claiming rewards, and checking eligibility.

5. Message Names: These are the names of the messages that are sent between different parts of the application. They include messages for starting a new round, making a prediction, claiming rewards, and checking eligibility.

6. Function Names: These are the names of the functions that perform various actions in the application. They include functions for connecting the wallet, making a prediction, starting a new round, claiming rewards, and checking eligibility.