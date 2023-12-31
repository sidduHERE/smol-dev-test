module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Add the domain of your image source here
  },
  env: {
    SOLANA_NETWORK: 'https://api.mainnet-beta.solana.com',
    TRADINGVIEW_IFRAME: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_b65cc&symbol=BTCUSD&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=Light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en',
  },
}