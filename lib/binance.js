const Binance = require('@binance/connector');

const binance = new Binance();

async function connectWallet() {
    try {
        await binance.walletConnect();
        return { status: 'success', message: 'Wallet connected successfully' };
    } catch (error) {
        return { status: 'error', message: error.message };
    }
}

async function claimTokens() {
    try {
        const claimResult = await binance.interactWithContract('claim');
        return { status: 'success', message: 'Tokens claimed successfully', data: claimResult };
    } catch (error) {
        return { status: 'error', message: error.message };
    }
}

module.exports = {
    connectWallet,
    claimTokens
};