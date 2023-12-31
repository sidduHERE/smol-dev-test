import React from 'react';
import PriceChart from '../components/PriceChart';
import PredictionCarousel from '../components/PredictionCarousel';
import { getPrice } from '../lib/tradingView';
import { getPredictions } from '../lib/solana';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btcPrice: null,
      predictions: [],
    };
  }

  async componentDidMount() {
    this.updatePrice();
    this.updatePredictions();
    this.interval = setInterval(() => {
      this.updatePrice();
      this.updatePredictions();
    }, 300000); // Update every 5 minutes
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async updatePrice() {
    const price = await getPrice();
    this.setState({ btcPrice: price });
  }

  async updatePredictions() {
    const predictions = await getPredictions();
    this.setState({ predictions: predictions });
  }

  render() {
    return (
      <div>
        <PriceChart price={this.state.btcPrice} />
        <PredictionCarousel predictions={this.state.predictions} />
      </div>
    );
  }
}