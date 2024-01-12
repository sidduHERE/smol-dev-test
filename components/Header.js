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
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;