import React from 'react';

const ShareButton = ({ platform, url, text }) => {
  const shareUrl = platform === 'twitter' 
    ? `https://twitter.com/share?url=${url}&text=${text}`
    : `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;

  return (
    <button onClick={() => window.open(shareUrl, '_blank')}>
      Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </button>
  );
};

export default ShareButton;