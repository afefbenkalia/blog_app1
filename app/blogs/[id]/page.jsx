'use client'
import { assets, blog_data } from '@/Assets/assets';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import React, {useEffect, useState } from 'react';
import styles from './page.module.css';
import Footer from '@/Components/Footer';



const page = ({params}) => {
    const [data,setData] = useState(null);

    const fetchBlogData =() =>{
        for (let i = 0; i < blog_data.length; i++) {
            if(Number(params.id)===blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
            
        }
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



{/*
        <div className={styles.container}>
                
                <div className={styles.infoContainer}>
                    
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>{data.title}</h1>
                        <div className={styles.user}>
                            <Image className={styles.avatar} src={data.author_img} width={60} height={60} alt='' />
                        </div>
                        
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                    <div className='mx-5 max-w-[800px] md:mx-auto mt-(-100px] mb-10'>
                        <Image src={data.image} width={1280}/>

                    </div>
                    <h1>Introduction : </h1>
                    <p>{data.description}</p>
                    <p></p>



                </div>
            </div>*/}