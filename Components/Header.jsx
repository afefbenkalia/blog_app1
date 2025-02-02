
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
const Header = () => {
  
  return (
    <div className={styles.container}>
      
        
        <div className={styles.videoContainer}>
            <video src="/video2.mp4" plays-inline="true" autoPlay loop muted className={`${styles.videoCon}`} ></video>
        </div>
      <div className={styles.center}>
        <h1 className={`${styles.title}`}>Latest Blogs</h1>
        <p className={`${styles.description} `}>
        Looking for fresh ideas, expert insights, and engaging content? You’re in the right place! 
        Blogger is your go-to source for articles spanning a wide range of topics, 
        from the latest innovations to timeless wisdom. Join us as we explore the world one article
         at a time!
        </p>

        <form className={`${styles.form}`} action="">
          <input type="email" placeholder="enter your email" className={styles.input}/>
          <button className={`${styles.button}`}> subscribe
          </button>
        </form>

      </div>
    </div>
  );
};

export default Header;

