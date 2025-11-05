import { NextApiRequest, NextApiResponse } from "next";

interface ApiCountry {
  name: { common: string ; official:string};
  flags: { svg: string; png: string ; alt:string};
  region: string;
  capital?: string[];
  population: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
  try {
    const fields = "name,flags,region,capital,population";
    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/all?fields=${fields}`
    );

    if (!response.ok) {
      throw new Error("failed to fetch countries");
    }

    const data:ApiCountry[] = await response.json();

       const countries = data.map((country) => ({

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
      capital: country.capital?.[0] || "N/A",
      population: country.population?.toLocaleString() || "0",
    }));


    
    res.status(200).json({countries});
  } catch (error) {
    console.error("Error fetching countries", error);
    res.status(500).json({ error: "Failed to fetch countries" });
  }
};

export default handler;