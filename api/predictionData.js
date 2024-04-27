const axios = require('axios');

const PredictionDataSchema = {
  type: 'object',
  properties: {
    round: { type: 'number' },
    status: { type: 'string' },
    options: { type: 'array', items: { type: 'string' } },
  },
  required: ['round', 'status', 'options'],
};

async function getPredictionData() {
  try {
    const response = await axios.get('https://api.blastofflzone.com/predictions');
    const predictionData = response.data;
    return predictionData;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getPredictionData,
  PredictionDataSchema,
};