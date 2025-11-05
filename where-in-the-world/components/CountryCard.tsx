
import { CountryProps } from "@/interfaces";
import Image from "next/image";

import Link from "next/link";

interface CountryCardProps{
    country:CountryProps
}


const CountryCard: React.FC<CountryCardProps> = ({country}) => {

    return(
        <div className="rounded-lg shadow-md p-4 card">
      <img
        src={country.flags.png|| country.flags.svg}
        alt={country.flags.alt || country.name.common}
        width={400}
        height={250}
        className="w-full h-40 object-cover" />

            <div className="py-5">
            <h2 className="font-bold text-xl">{country.name?.common}</h2>
            <p><span className="font-semibold">Region:</span> {country.region}</p>
            <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            <p><span className="font-semibold">Popultaion:</span> {country.population}</p>
            </div>

            <Link href={`/detail/${country.name.common}`}>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 hover:scale-105 cursor-pointer">
               View Details
              </button>
            </Link>
        </div>
    )
}
export default CountryCard;