
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

