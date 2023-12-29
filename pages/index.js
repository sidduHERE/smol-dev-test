import React, { useEffect, useState } from 'react';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import Option from '../components/Option';
import ClaimButton from '../components/ClaimButton';
import ShareButton from '../components/ShareButton';
import WalletButton from '../components/WalletButton';
import ConnectWallet from '../components/ConnectWallet';
import InteractContract from '../components/InteractContract';

export default function Home() {
  const [roundsData, setRoundsData] = useState([]);
  const [claimData, setClaimData] = useState([]);
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    fetchRoundsData();
    fetchClaimData();
  }, []);

  const fetchRoundsData = async () => {
    const res = await fetch('/api/rounds');
    const data = await res.json();
    setRoundsData(data);
  };

  const fetchClaimData = async () => {
    const res = await fetch('/api/claim');
    const data = await res.json();
    setClaimData(data);
  };

  const connectWallet = async () => {
    // Connect wallet logic here
  };

  const interactContract = async () => {
    // Interact with contract logic here
  };

  const claimTokens = async () => {
    // Claim tokens logic here
  };

  const shareOnTwitter = async () => {
    // Share on Twitter logic here
  };

  const shareOnFacebook = async () => {
    // Share on Facebook logic here
  };

  return (
    <div>
      <PriceChart />
      <Carousel roundsData={roundsData} />
      <Option optionType="long" />
      <Option optionType="short" />
      <ClaimButton claimData={claimData} claimTokens={claimTokens} />
      <ShareButton platform="twitter" shareOnTwitter={shareOnTwitter} />
      <ShareButton platform="facebook" shareOnFacebook={shareOnFacebook} />
      <WalletButton connectWallet={connectWallet} />
      <ConnectWallet walletData={walletData} />
      <InteractContract interactContract={interactContract} />
    </div>
  );
}