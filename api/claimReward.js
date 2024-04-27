const axios = require('axios');

const ClaimRewardSchema = {
  type: 'object',
  properties: {
    walletAddress: { type: 'string' },
    rewardAmount: { type: 'number' },
    bonusAmount: { type: 'number' },
  },
  required: ['walletAddress', 'rewardAmount', 'bonusAmount'],
};

async function claimReward(walletAddress) {
  try {
    const response = await axios.post('https://api.blastofflzone.com/claim', {
      walletAddress,
    });

    if (response.data.success) {
      return {
        walletAddress,
        rewardAmount: response.data.rewardAmount,
        bonusAmount: response.data.bonusAmount,
      };
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  ClaimRewardSchema,
  claimReward,
};