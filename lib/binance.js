```javascript
const axios = require('axios');

const BINANCE_API_URL = 'https://api.binance.com';

async function getStakingInfo() {
    try {
        const response = await axios.get(`${BINANCE_API_URL}/sapi/v1/staking/platform/product/list`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch staking info: ${error}`);
    }
}

async function stakeETH(walletAddress, amount) {
    try {
        const response = await axios.post(`${BINANCE_API_URL}/sapi/v1/staking/platform/ethereum/stake`, {
            walletAddress,
            amount
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to stake ETH: ${error}`);
    }
}

module.exports = {
    getStakingInfo,
    stakeETH
};
```