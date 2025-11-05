import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Header:React.FC = () => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=> {
         if(darkMode){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
    }, [darkMode])



    return(
        <header className="flex justify-between items-center px-5 py-4 md:px-10 shadow-sm ">
            <Link href={`/`}><h2 className="font-bold text-md md:text-2xl cursor-pointer">Where in the world?</h2></Link>
             

             <button 
             className=" flex items-center gap-2  cursor-pointer bg-transparent shadow-md hover:shadow-lg px-2 py-3 rounded-md hover:scale-105"
             onClick={() => setDarkMode(!darkMode)}>

            {darkMode ? (
          //  Light Mode Icon
        <Image src="/lighticon.svg" alt="lightmode icon" width={24} height={24} className="text-white"/>
        ) : (
          //  Dark Mode Icon
       <Image src="/darkicon.svg" alt="darkmode icon" width={24} height={24}/>
        )}

                <span className="font-medium text-sm md:text-base">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
                
            </button>
        </header>
    )
}
export default Header;