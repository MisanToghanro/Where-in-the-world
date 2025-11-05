import { NextApiRequest, NextApiResponse } from "next";

interface ApiCountryDetail{
  name: { common: string ; official:string};
  flags: { svg: string; png: string ; alt:string};
  region: string;
   subregion?: string;
  capital?: string[];
  population: number;
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
 
    const {name} = req.query



  try {
    const fields = "name,flags,region,subregion,capital,population,currencies,languages,borders";
    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/name/${name}?fields=${fields}`
    );

    if (!response.ok) {
      throw new Error("failed to fetch countries  details");
    }

    const data:ApiCountryDetail[] = await response.json();

     const country = data[0]; 

    const formatted = {
      name: {
        common: country.name?.common || "N/A",
        official: country.name?.official || "N/A",
      },
      flags: {
        png: country.flags?.png || "",
        svg: country.flags?.svg || "",
        alt: country.flags?.alt || country.name?.common || "Flag",
      },
      region: country.region || "N/A",
      subregion: country.subregion || "N/A",
      capital: country.capital?.[0] || "N/A",
      population: country.population?.toLocaleString() || "0",
      borders: country.borders || [],
      languages: country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A",
      currencies: country.currencies
        ? Object.values(country.currencies)
            .map((c) => `${c.name} (${c.symbol})`)
            .join(", ")
        : "N/A",
    };
    
    res.status(200).json({country:formatted});
  } catch (error) {
    console.error("Error fetching country details", error);
    res.status(500).json({ error: "Failed to fetch details" });
  }
};

export default handler;