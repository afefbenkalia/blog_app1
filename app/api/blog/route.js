import { NextResponse } from 'next/server'; // Ajout de l'importation nécessaire
import { writeFile } from 'fs/promises';
import BlogModel from '@/lib/models/BlogModel';
import { ConnectDB } from '@/lib/config/db';

const LoadDB = async () => {
    await ConnectDB();
};
LoadDB();

export async function POST(request) {
    const formData = await request.formData();
    console.log("FormData received:");
    
    for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }

    // Vérifier si l'image est présente dans le formData
    const image = formData.get('image');
    if (!image) {
        console.error("No image provided");
        return NextResponse.json({ success: false, msg: "No image provided" }, { status: 400 });
    }

    // Traiter l'image si elle existe
    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        author: formData.get('author'),
        image: imgUrl,
        author_img: formData.get('author_img'),
    };

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
}













/*import { category } from "@/Assets/assets";
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'
const LoadDB = async () =>{
    await ConnectDB();
}
LoadDB();
export async function GET(request) {
    return NextResponse.json({msg:"API WORKING"})
}
export async function POST(request){

    const formData = await request.formData();

    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
   
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        author_img:`${formData.get('author_img')}`
    }
    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({success:true,msg:"Blog Added"})

} 

*/



