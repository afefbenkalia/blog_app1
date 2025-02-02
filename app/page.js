'use client '
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
  );
}
