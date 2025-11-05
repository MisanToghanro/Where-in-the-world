

export interface CountryProps{
    name:{
        common:string,
    },
    flags:{
        png:string,
        svg:string,
        alt?:string
    },
    region:string,
    capital?:string[],
    population:number
}

export interface CountryDetailProps {
  name: {
    common: string;
    official: string;
    nativeName?: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  region: string;
  subregion?: string;
  capital: string;
  population: number // if you're formatting it with commas, you can keep it string
  tld?: string;
  currencies?: string; // already formatted (e.g. "Euro (€)")
  languages?: string; // already joined (e.g. "English, French")
  borders?: string[];
}
