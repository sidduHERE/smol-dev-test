```javascript
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PriceChart from '../components/PriceChart'
import PredictionCarousel from '../components/PredictionCarousel'
import StakingBanner from '../components/StakingBanner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solana Prediction Market</title>
        <meta name="description" content="Solana chain dapp for prediction market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Solana Prediction Market
        </h1>

        <p className={styles.description}>
          Predict BTC price and earn rewards
        </p>

        <PriceChart />

        <PredictionCarousel />

        <StakingBanner />
      </main>

      <Footer />
    </div>
  )
}
```