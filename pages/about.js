import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AirdropGuide from '../components/AirdropGuide';

const About = () => {
    return (
        <div>
            <Header />
            <main>
                <AirdropGuide />
            </main>
            <Footer />
        </div>
    );
};

export default About;