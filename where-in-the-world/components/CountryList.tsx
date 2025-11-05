import Error from "next/error"
import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import { CountryProps } from "@/interfaces"
const CountryList: React.FC = () => {

    const [countries,setCountries] = useState<CountryProps[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [errors, setErrors ] = useState<string>("")

    const fetchCountries = async() => {
        
        setLoading(true);
        setErrors("")
         
        try{
         const response = await fetch(`/api/country`);

         if(!response.ok){
            setErrors("You are offline.Please check your internet connection")
         }

         const data = await response.json();
         setCountries(data.countries)
        
        }catch(error){
           setErrors("something went wrong")
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCountries()
    },[])

      if (loading) return <p className="text-center mt-5">Loading...</p>;

      if (errors) return <p className="text-center mt-5 text-red-500">{errors}</p>;

    return(
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 p-5">
            {countries.map((country, index) => (
                <CountryCard key={index} country={country}/>
            ))}
           
        </div>
    )
}

export default CountryList;                                        