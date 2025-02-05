'use client'
import { assets } from '@/Assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import styles from './page.module.css'

const Page = () => {
    const [image, setImage] = useState(null);
    const [data,setData]= useState({
        title:"",
        description:"",
        category:"fashion",
        author:"Alex Bennett",
        authorImg:"/author_img.jpg"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData(); 
        formData.append('title',data.title);  
        formData.append('description',data.description);   
        formData.append('category',data.category);   
        formData.append('author',data.author);   
        formData.append('authorImg',data.authorImg);
        formData.append('image',image);   
        const response = await axios.post('/api/blog',formData);
        response.data.success ? toast.success(response.data.msg) : toast.error("Error");
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <p className={styles.title}>Upload</p>

            <label htmlFor="image" className={styles.uploadLabel}>
                <div className={styles.uploadContainer}>
                    <Image 
                        src={assets.cloud_upload} 
                        width={50} 
                        height={50} 
                        alt="Upload Icon" 
                        className="object-cover"
                    />
                </div>
            </label>

            <input type="file" id="image" hidden accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />

            {image && (
                <div className={styles.uploadedImage}>
                    <Image 
                        src={URL.createObjectURL(image)} 
                        width={400} 
                        height={200} 
                        alt="Uploaded Image" 
                        className="object-cover rounded-md"
                    />
                </div>
            )}
            
            <p className={styles.title}>Blog title</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className={styles.input} type="text" placeholder='type here' required />
            
            <p className={styles.title}>Blog description</p>
            <textarea name='description' onChange={onChangeHandler} value={data.description} className={styles.textarea} placeholder='write content here' rows={6} required />
            
            <p className={styles.title}>Blog category</p>
            <select name="category" onChange={onChangeHandler} value={data.category} className={styles.select}>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="travel">travel</option>
                <option value="culture">culture</option>
                <option value="coding">coding</option>
            </select>

            <button type='submit' className={styles.button}>Add</button>
        </form>
    )
}

export default Page;
