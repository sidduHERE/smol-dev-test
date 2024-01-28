import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Claim() {
  const router = useRouter();
  const [claimToken, setClaimToken] = useState(null);

  useEffect(() => {
    const fetchClaimToken = async () => {
      try {
        const response = await axios.get('/api/claim');
        setClaimToken(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClaimToken();
  }, []);

  const handleClaim = async () => {
    try {
      const response = await axios.post('/api/claim', { claimToken });
      if (response.data.success) {
        router.push('/success');
      } else {
        router.push('/failure');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Claim your ALT tokens</h1>
        <p>Total Allocated ALT Tokens: 300,000,000 (3% of total supply)</p>
        <button onClick={handleClaim} disabled={!claimToken}>
          Claim
        </button>
      </main>
      <Footer />
    </div>
  );
}