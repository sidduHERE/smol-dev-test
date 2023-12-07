import '../styles/globals.css'
import { WalletProvider } from '../lib/wallet'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </WalletProvider>
  )
}

export default MyApp