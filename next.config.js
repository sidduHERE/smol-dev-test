module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Add the domain of your image source here
  },
  env: {
    SOLANA_NETWORK: 'https://api.mainnet-beta.solana.com',
    TRADINGVIEW_IFRAME: 'https://www.tradingview.com/chart/?symbol=BTCUSD'
  }
}