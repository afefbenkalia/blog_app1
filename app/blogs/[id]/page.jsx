'use client'
import { assets, blog_data } from '@/Assets/assets';
import Navbar from '@/Components/navbar';
import Image from 'next/image';
import React, {useEffect, useState } from 'react';
import styles from './page.module.css';



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
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <Navbar/>
            <div className='flex justify-between items-center'>
                
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image className='mx-auto mt-6 border-white rounded-full' src={data.author_img} width={60} height={60} alt='' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
                <div className='mx-5 max-w-[800px] md:mx-auto mt-(-100px] mb-10'>
                    <Image src={data.image} width={1280}/>

                </div>
                <h1>Introduction : </h1>
                <p>{data.description}</p>
                <p></p>



            </div>
        </div>
    </>:<></>
    );
};

export default page;
