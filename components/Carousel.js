import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/Carousel.module.css';

const CarouselComponent = ({ roundData }) => {
  return (
    <div id="carousel" className={styles.carousel}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={300000}
      >
        {roundData.map((round, index) => (
          <div key={index} className={styles.carouselItem}>
            <h3>{round.title}</h3>
            <p>{round.description}</p>
            <button disabled={round.isExpired}>Go Long</button>
            <button disabled={round.isExpired}>Go Short</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;