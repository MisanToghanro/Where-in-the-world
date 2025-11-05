import { useState } from "react";
import CountryCard from "./CountryCard";
import { CountryProps } from "@/interfaces";


const SearchBar: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>("");

  const handleSearch= async () => {
       setLoading(true);
       setError("");

       if(searchTerm.trim() === ""){
        setError("Please type in a country name");
        setLoading(false);
        return;
       }

       try{
       const response = await fetch(`/api/search?name=${searchTerm}`);
       if (!response.ok){
         throw new Error("Failed to search country");
       }

       const data = await response.json();
       setCountries(data.countries);
       setError("")
       
       }catch(error){
          setError("No countries found or something went wrong")
       }finally{
        setLoading(false)
       }

  }
  return(
    <div className="p-6 ">
      <div className="flex gap-3 mb-6 ">
        <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
        />
        <button
        onClick={handleSearch}
        disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 cursor-pointer shadow-md"
        >
          {loading ? "Searching": "Search"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      {countries.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    {countries.map((country, index) => (
      <CountryCard key={index} country={country} />
    ))}
  </div>)}
      
    </div>
  )
}
export default SearchBar;
