```javascript
const fetch = require('node-fetch');

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

function formatWinnerList(winners) {
    return winners.map(winner => `@${winner}`).join(', ');
}

module.exports = {
    fetchData,
    formatWinnerList
};
```