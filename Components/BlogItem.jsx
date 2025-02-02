import React from 'react';
import styles from './BlogItem.module.css';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const BlogItem = ({ title, description, category, image,/*id */id}) => {
    return (
        <div className={styles.blogItem}>
            
            <Link href={`/blogs/${id}`}>
                <Image src={image} alt='eroooor' width={400} height={400} className={styles.blogImage} />
            </Link>
            <p className={styles.categoryLabel}>{category}</p>
            <div className={styles.blogContent}>
                <h5 className={styles.blogTitle}>{title}</h5>
                <p className={styles.blogDescription}>{description}</p>
                <Link href={`/blogs/${id}`}>
                    <div className={styles.readMore}>
                        Read more <Image src={assets.arrow_right} alt='' className={styles.arrowIcon} width={12} />
                    </div>
                </Link>
                
            </div>
        </div>
    );
};

export default BlogItem;
