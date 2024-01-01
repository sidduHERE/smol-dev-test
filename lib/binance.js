const Binance = require('@binance/connector');

const binance = new Binance();

async function connectWallet() {
    try {
        await binance.walletConnect();
        console.log('Wallet connected successfully');
    } catch (error) {
        console.error('Failed to connect wallet', error);
    }
}

async function interactWithContract() {
    try {
        const contract = await binance.getContract('0x...');
        await contract.methods.claim().send({ from: binance.account });
        console.log('Claim successful');
    } catch (error) {
        console.error('Failed to interact with contract', error);
    }
}

module.exports = {
    binance,
    connectWallet,
    interactWithContract
};