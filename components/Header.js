import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <a>
                        <Image
                            src="/images/altlayer.png"
                            alt="AltLayer Logo"
                            width={120}
                            height={60}
                        />
                    </a>
                </Link>
                <div>
                    <Link href="/claim">
                        <a>Claim</a>
                    </Link>
                    <Link href="/announcement">
                        <a>Announcement</a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;