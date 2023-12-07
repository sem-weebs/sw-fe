/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

type SearchResults = {
  categories: {
    type: string;
    value: string;
  };
  image?: {
    type: string;
    value: string;
  };
  title: {
    type: string;
    value: string;
  };
  username: {
    type: string;
    value: string;
  };
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [query, setQuery] = useState("");

  const toggleCategories = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearch = () => {
    setIsLoading(true);

    const queryElement = document.getElementById(
      "searchInput",
    ) as HTMLInputElement | null;
    const query = queryElement ? queryElement.value : "";
    const selectedCategories = document.querySelectorAll(
      'input[type="checkbox"]:checked',
    );
    const categories = Array.from(selectedCategories)
      .map((checkbox) => checkbox.nextElementSibling?.textContent)
      .filter((text) => text !== null && text !== undefined)
      .join(";");

    const apiUrl = `http://127.0.0.1:5000/search?categories=${categories}&q=${query}`;
    console.log(apiUrl);

    setTimeout(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const searchResults = data.map((result: SearchResults) => ({
              ...result,
              image: result.image ? { ...result.image } : undefined,
            }));

            setSearchResults(searchResults);
            setIsLoading(false);
          } else {
            console.error("Error fetching data or empty response");
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }, 2000);
  };

  return (
    <div className="container pt-12 min-h-screen min-w-full text-center bg-gradient-to-br from-purple-800 to-blue-600 p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold mb-6 text-white">Sem-Weebs</h1>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <input
          id="searchInput"
          type="text"
          className="border-2 border-blue-500 p-3 w-1/2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className={`${
            query.trim()
              ? "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              : "bg-gray-500 cursor-not-allowed"
          } text-white px-6 py-3 rounded-md relative`}
          disabled={!query.trim()}
        >
          {isLoading ? (
            <div className="w-6 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#3498db_0deg,#3498db_180deg,transparent_180deg,transparent_360deg)]">
              <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#3498db_0deg,#3498db_180deg,transparent_180deg,transparent_360deg)]"></span>
            </div>
          ) : (
            "Search"
          )}
        </button>
      </div>
      <div className="mt-8">
        <div className="flex flex-col space-y-2 items-center bg-gray-800 p-4 rounded-md">
          <h2
            className="text-2xl font-semibold mb-4 text-white cursor-pointer"
            onClick={toggleCategories}
          >
            🔍 Categories {isCollapsed ? "▼ " : "▲"}
          </h2>
          <div className={isCollapsed ? "hidden" : "grid grid-cols-10 gap-4"}>
            {[
              "Accessories",
              "Actors/actresses",
              "Adult content",
              "Animals",
              "Art",
              "Artists",
              "Beauty",
              "Business",
              "Careers",
              "Cars",
              "Cinema",
              "Clothing",
              "Coaches",
              "Comics sketches",
              "Computers",
              "Economics",
              "Extreme",
              "Family",
              "Fashion",
              "Finance",
              "Fitness",
              "Fun",
              "Gadgets",
              "Gym",
              "Happiness",
              "Humor",
              "Jewellery",
              "Journalism",
              "Kids",
              "Lifestyle",
              "Literature",
              "Luxury",
              "Machinery",
              "Modeling",
              "Motorbikes",
              "Music",
              "Nature landscapes",
              "Outdoor activity",
              "Outfits",
              "Photography",
              "Racing",
              "Retail",
              "Science",
              "Shopping",
              "Shows",
              "Sports with a ball",
              "Sports",
              "Technologies",
              "Toys",
              "Travel",
            ].map((category, index) => (
              <label key={index} className="flex items-center text-white">
                <input type="checkbox" className="mr-2 border-2 border-white" />
                <span className="text-gray-300 text-left">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-8">
        {isLoading ? (
          <img
            src="https://i.imgur.com/S43zUau.gif"
            alt="Loading..."
            className="mb-4 rounded-md w-64"
          />
        ) : searchResults.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-md"
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-800 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-600">
                  <img
                    src={
                      result.image?.value ||
                      "https://animesher.com/orig/1/135/1355/13559/animesher.com_yui-hirasawa-gif-k-on-1355944.gif"
                    }
                    alt=""
                    className="object-cover w-full h-full rounded-md mb-4"
                  />
                </div>
                <div className="p-6">
                  <p className="block font-sans text-xl font-bold leading-snug tracking-normal text-white dark:text-blue-gray-900 antialiased">
                    {result.username.value}
                  </p>
                  <p className="block font-sans text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 antialiased">
                    {result.title.value}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/${result.username.value}`}
                    className="select-none rounded-lg bg-blue-500 dark:bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <img
            src="https://media.tenor.com/QfMap9xxB10AAAAC/yui-hirasawa-thinking.gif"
            alt="Enhance Search Experience"
            className="mb-4 rounded-md w-64"
          />
        )}
      </div>
    </div>
  );
};

export default Index;
