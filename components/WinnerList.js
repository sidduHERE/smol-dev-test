import React from 'react';

const WinnerList = ({ winnerData }) => {
  return (
    <div id="winner-list">
      <h2>Winners</h2>
      <ul>
        {winnerData.map((winner, index) => (
          <li key={index}>
            {winner}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WinnerList;