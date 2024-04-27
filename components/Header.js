import React from 'react';
import Link from 'next/link';
import '../public/styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link href="/">
                <a className="logo">Blastoff.zone</a>
            </Link>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link href="/price-chart">
                            <a>BTC Price Chart</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/prediction-carousel">
                            <a>Prediction Carousel</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/claim-reward">
                            <a>Claim Reward</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;