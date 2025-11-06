

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
  population: number 
  tld?: string;
  currencies?: string; 
  languages?: string;
  borders?: string[];
}
