'use client'
import { assets, blog_data } from '@/Assets/assets';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import React, {useEffect, useState } from 'react';
import styles from './page.module.css';
import Footer from '@/Components/Footer';
import axios from 'axios';



const page = ({params}) => {
    const [data,setData] = useState(null);

    const fetchBlogData =async() =>{
        const response = await axios.get('/api/blog',{
            params:{
                id:params.id
            }
        })
        setData(response.data);
    }
    
    useEffect(()=>{
        fetchBlogData();
    },[])
    return (data?<>
    <div>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
        
            <div className={styles.container}>
            
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.user}>
                    
                        <div className={styles.userImageContainer}>
                            <Image src={data.author_img} alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                        <span className={styles.username}>{data.author}</span>
                        <span className={styles.date}>01.01.2025</span>
                        </div>
                    </div>
                    </div>
                    
                    <div className={styles.imageContainer}>
                        <Image src={data.image} alt="" fill className={styles.image} />
                    </div>
                    
                </div>
                <div className={styles.content}>
                    <div className={styles.post}>
                        <div className={styles.description}>
                            <p>{data.description}</p>
                        
                        </div>
                    </div>
            
                </div>
                
            </div>
            <Footer/>



        
    </div> 
        
    </>:<></>
    );
};
export default page;



