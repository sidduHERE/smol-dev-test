import { useEffect, useState } from 'react';
import { getAnnouncementData } from '../api/announcement';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Announcement.module.css';

export default function Announcement() {
  const [announcementData, setAnnouncementData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAnnouncementData();
      setAnnouncementData(data);
    }
    fetchData();
  }, []);

  if (!announcementData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{announcementData.title}</h1>
        <img src={announcementData.image} alt={announcementData.title} className={styles.image} />
        <p className={styles.description}>{announcementData.description}</p>
        <a href={announcementData.link} className={styles.link}>Read Full Announcement</a>
        <h2 className={styles.subtitle}>Winners</h2>
        <ul className={styles.winners}>
          {announcementData.winners.map((winner, index) => (
            <li key={index} className={styles.winner}>{winner}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}