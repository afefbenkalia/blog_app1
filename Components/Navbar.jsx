'use client'
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.header}>
                <Image
                    src={assets.image}
                    width={180}
                    alt="image logo"
                    className={styles.logo}
                />
                <div className={styles.links}>
                    <Link href="/">Home page</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




/*
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
const Navbar= () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={assets.image}
          width={180}
          alt="image logo"
          className={styles.logo}
        />
        <div className={styles.links}>
          <Link href="/">Home page</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <Link href="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

*/