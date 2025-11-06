
# 🌍 Where in the World

A responsive **Next.js + TypeScript** application that allows users to explore countries around the world using the [REST Countries API](https://restcountries.com/).  
Built with **Tailwind CSS**, this project includes dark/light mode support and dynamic routing for detailed country pages.

---

## 🚀 Features

- 🔍 **Search countries** by name
- 🌎 **View detailed country information**
- 🌓 **Toggle between light and dark themes**
- 🗺️ **Filter countries by region**
- ⚡ **Fast and responsive** UI built with Next.js and Tailwind CSS
- 🧩 Organized component structure and API routes

---
## 🧱 Project Structure
where-in-the-world/
├── components/
│ ├── CountryCard.tsx
│ ├── CountryList.tsx
│ ├── SearchBar.tsx
│ └── Layout/
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── Layout.tsx
│
├── pages/
│ ├── api/
│ │ ├── country.ts
│ │ ├── countrydetail/[name].ts
│ │ └── search.ts
│ ├── detail/[name].tsx
│ ├── _app.tsx
│ └── index.tsx
│
├── public/
│ ├── darkicon.svg
│ ├── lighticon.svg
│ ├── globe.svg
│ └── favicon.ico
│
├── styles/
│ └── globals.css
│
├── tsconfig.json
├── tailwind.config.js
├── next.config.ts
└── package.json

---
## 🧩 Components Overview

SearchBar – Handles country search functionality.

CountryCard – Displays basic country info like flag, population, and region.

CountryList – Maps through and renders multiple CountryCard components.

Layout – Wrapper component containing header, footer, and theme toggle.

---
## Api routes

| Route                        | Description                      |
| ---------------------------- | -------------------------------- |
| `/api/country`               | Fetch all countries              |
| `/api/countrydetail/[name]`  | Fetch a single country's details |
| `/api/search?name={country}` | Search for a country by name     |


