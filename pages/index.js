import { useEffect, useState } from 'react';
import PriceChart from '../components/PriceChart';
import Carousel from '../components/Carousel';
import Countdown from '../components/Countdown';
import OptionButton from '../components/OptionButton';
import { connectSolana } from '../lib/solana';
import { initTradingView } from '../lib/tradingView';

export default function Home() {
  const [predictions, setPredictions] = useState([]);
  const [currentPrediction, setCurrentPrediction] = useState(null);
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    connectSolana();
    initTradingView(setPriceData);
  }, []);

  useEffect(() => {
    if (priceData) {
      const newPredictions = [...predictions];
      newPredictions.push(priceData);
      setPredictions(newPredictions);
      setCurrentPrediction(priceData);
    }
  }, [priceData]);

  return (
    <div>
      <PriceChart priceData={priceData} />
      <Carousel predictions={predictions} />
      {currentPrediction && (
        <div>
          <Countdown prediction={currentPrediction} />
          <OptionButton option="long" />
          <OptionButton option="short" />
        </div>
      )}
    </div>
  );
}