'use client'
import React, { useState } from 'react';
import styles from './BlogList.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { blog_data, category } from '@/Assets/assets';
import BlogItem from './BlogItem';
const BlogList = () =>{
    const [menu,setMenu]=useState("all");
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular categories</h1>
            <p className={styles.title2}>Here, we share travel tips, destination guides, and stories that inspire your next adventure.</p>
            <div className={styles.categories}>
                
                <div className={`${styles.category} ${styles.style}`} onClick={()=>setMenu('all')}  >
                    <Image src={category.categ1} width={50} height={50} className={styles.image} alt='all'/>
                    all
                </div>
                <div className={`${styles.category} ${styles.fashion}`} onClick={() => setMenu('fashion')}>
                    <Image src={category.categ2} width={50} height={32} className={styles.image} alt='fashion'/>
                    Fashion
                </div>
                <div className={`${styles.category} ${styles.food}`} onClick={()=>setMenu('food')}>
                    <Image src={category.categ3} width={50} height={32} className={styles.image} alt='food' />
                    Food
                </div>
                <div className={`${styles.category} ${styles.travel}`} onClick={()=>setMenu('travel')} >
                    <Image src={category.categ4} width={50} height={32} className={styles.image} alt='travel'/>
                    Travel
                </div>
                <div className={`${styles.category} ${styles.culture}`} onClick={()=>setMenu('culture')}>
                    <Image src={category.categ5} width={50} height={32} className={styles.image} alt='culture'/>
                    culture
                </div>
                <div className={`${styles.category} ${styles.coding}`} onClick={()=>setMenu('coding')}>
                    <Image src={category.categ6} width={50} height={32} className={styles.image} alt='coding' />
                    coding
                </div>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {
                    blog_data.filter((item)=> menu==="all"?true:item.category===menu).map((item,index)=>{
                        return <BlogItem key={index} /*blocs id */id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
                    })
                }

            </div>
            
        </div>
    )
}
export default BlogList;