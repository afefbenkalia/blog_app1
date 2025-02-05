import { assets } from "@/Assets/assets"
import { Sidebar } from "@/Components/adminComponants/Sidebar"
import Navbar from "@/Components/Navbar"
import styles from './layout.module.css'
import Image from "next/image"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<style></style>
export default function Layout({children}){
    return(
        <>
            <div className="flex">
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                    />
               
                <Sidebar/>
                
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Dashbord</h1>
                    </div>
                    <Image src={assets.profile_icon} alt='' width={70} className={styles.image}/>
                </div>


            <page/>    
            </div>
            {children}
        
        </>
    )
}