import { Sidebar } from "@/Components/adminComponants/Sidebar"
export default function Layout({children}){
    return(
        <>
            <div className="flex">
                <Sidebar/>

                
            </div>
            {children}
        
        </>
    )
}