import axios from 'axios';

export const fetchOptions = async () => {
  try {
    const response = await axios.get('https://api.solana.com/options');
    return response.data;
  } catch (error) {
    console.error('Error fetching options:', error);
    return null;
  }
};

export const updateOptions = async () => {
  const options = await fetchOptions();
  if (options) {
    // Emit an event to update the options in the frontend
    process.emit('updateOptions', options);
  }
};

// Fetch and update options every 5 minutes
setInterval(updateOptions, 5 * 60 * 1000);

// Fetch and update options immediately on startup
updateOptions();