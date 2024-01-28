import axios from 'axios';

export const rounds = async () => {
  try {
    const response = await axios.get('https://api.solana.com/rounds');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateRounds = async () => {
  const data = await rounds();
  if (data) {
    postMessage({ type: 'updateRounds', payload: data });
  }
};

setInterval(updateRounds, 300000); // Update rounds every 5 minutes