import React from 'react';
import Navbar from '../Navbar';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import styles from './Sidebar.module.css';
import Link from 'next/link';

export const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.menu}>
                    <Link href='/admin/addProduct' className={styles.menuItem}>
                        <Image src={assets.add} alt='' width={28} />
                        <p>Add blog</p>
                    </Link>
                    <Link href='/admin/blogList' className={styles.menuItem}>
                        <Image src={assets.blog_pencil} alt='' width={28} />
                        <p>Blog lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className={styles.menuItem}>
                        <Image src={assets.envelope} alt='' width={28} />
                        <p>Subscription</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};
