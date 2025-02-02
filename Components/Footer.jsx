import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className={styles.op}></div>
                <div className={styles.container}>
  
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <div className={styles.blog1}>
                                <h1 className={styles.logoText}> Best Blogger </h1>
                                <p className={styles.description}>
                                    Blogger, where your ideas turn into words and 
                                    stories that inspire others! Whether you're a beginner
                                    or a professional writer, Blogger allows you to share your experiences, 
                                    opinions, and creativity with the world effortlessly. Create your blog, 
                                    and connect with your audience in your own unique way.
                                    Here, every idea deserves to be written, and every story deserves to be told. 
                                    Join us now and start your journey in the world of blogging!"
                                    Let me know if you'd like any modifications!
                                </p>
                                <div className={styles.icons}>
                                    <Image src={assets.twitter} alt='' width={20}/>
                                    <Image src={assets.facebook} alt='' width={20}/>
                                    <Image src={assets.google} alt='' width={20}/>
                                    <Image src={assets.envelope} alt='' width={20}/>
                                </div>
                            </div>
                            <div className={styles.links}>
                                <div className={styles.list}>
                                    <span className={styles.listTitle}>Links</span>
                                    <Link href="/">HomePage</Link>
                                    <Link href="/">Blog</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>

                                </div>
                                <div className={styles.list}>
                                    <span className={styles.listTitle}>Tags</span>
                                    <Link href="/">fashion</Link>
                                    <Link href="/">food</Link>
                                    <Link href="/">travel</Link>
                                    <Link href="/">culture</Link>
                                    <Link href="/">coding</Link>


                                </div><div className={styles.list}>
                                    <span className={styles.listTitle}>Social</span>
                                    <Link href="/">facebook</Link>
                                    <Link href="/">twitter</Link>
                                    <Link href="/">google</Link>
                                    <Link href="/">email</Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className={styles.footer}>
            <Image src={assets.logo} alt='' width={120} className={styles.footerLogo} />
            <p className={styles.footerText}>All rights reserved. Copyright @blogger</p>
            
       </div>

        </div>
        
        /*
        */
    );
};
export default Footer;
