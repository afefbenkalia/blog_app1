import { ConnectDB } from '@/lib/config/db';
const { NextResponse } = require('next/server'); // Ajout de l'importation nécessaire
import { writeFile } from 'fs/promises';
import BlogModel from '@/lib/models/BlogModel';
const fs = require('fs');
const LoadDB = async () => {
    await ConnectDB();
};
LoadDB();
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);

    }
    else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
    }
    

}
export async function POST(request) {
    console.log("Content-Type:", request.headers.get("content-type"));
    const formData = await request.formData();
    console.log("FormData received:");
    
    for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }
    // Vérifier si l'image est présente dans le formData
    const image = formData.get('image');
    console.log("Image reçue dans le serveur:", image);
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
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        author_img:`${formData.get('authorImg')}`
    };

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"blog deleted"});

}

