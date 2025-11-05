import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { CountryDetailProps } from "@/interfaces";


const CountryDetail: React.FC = () => {

    const router = useRouter();
    const {name} = router.query;
    const [countryDetail, setCountryDetail] = useState<CountryDetailProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const fetchCountryDetail = async()=>{

        setLoading(true);
        setError("")

        try{
            const response = await fetch(`/api/countrydetail/${name}`);

            if(!response.ok){
                setError("Couldn't fetch details. Please check your internet connection")
            }

            const data = await response.json()
            setCountryDetail(data.country)
        }catch(error){
           setError("something went wrong")
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(!name){
            return;
        }
       fetchCountryDetail()
    }, [name])

      if (loading) return <p className="text-center mt-5">Loading details...</p>;
  if (error) return <p className="text-center text-red-500 mt-5">{error}</p>;


    return(
<div className="p-10 md:p-20">

<button
  onClick={() => router.back()}
  className="mb-10 px-6 py-2  rounded-md shadow hover:scale-105 cursor-pointer card">
  ← Back
</button>

  {countryDetail ? (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
      
      {/* Flag */}
      <img
        src={countryDetail.flags.svg || countryDetail.flags.png}
        alt={countryDetail.flags.alt || countryDetail.name.common}
        className="w-full md:w-1/2  shadow-lg card"
      />

      {/* Country info */}
      <div className="w-full md:w-1/2 space-y-4">
      <h1  className="text-3xl font-bold mb-6"> {countryDetail.name.official}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 ">
          <p><strong>Population:</strong> {countryDetail.population}</p>
          <p><strong>Region:</strong> {countryDetail.region}</p>
          <p><strong>Subregion:</strong> {countryDetail.subregion}</p>
          <p><strong>Capital:</strong> {countryDetail.capital}</p>
          <p><strong>Languages:</strong> {countryDetail.languages}</p>
          <p><strong>Currencies:</strong> {countryDetail.currencies}</p>
        </div>

        {/* Border countries */}
        {countryDetail.borders?.length ? (
          <div className="mt-8">
            <strong>Border Countries:</strong>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {countryDetail.borders?.map((border, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded shadow-sm card">
                  {border}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-6 text-gray-500 italic ">No border countries</p>)}
      </div>

    </div>
  ) : (
    <p>Details not found</p>
  )}

</div> )
}
export default CountryDetail