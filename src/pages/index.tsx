/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

type SearchResults = {
  name: string;
  username: string;
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);

  const toggleCategories = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearch = () => {
    // Perform your search logic here
    setIsLoading(true);

    // Simulating a delay, replace this with your actual search logic
    // Simulating a delay, replace this with your actual search logic
    setTimeout(() => {
      // Simulated search results
      const dummyResults = [
        { name: "John Doe", username: "johndoe" },
        { name: "Jane Smith", username: "janesmith" },
        { name: "Bob Johnson", username: "bobjohnson" },
        // Add more dummy results if needed
      ];

      setSearchResults(dummyResults);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto pt-12 min-h-screen text-center bg-gradient-to-br from-purple-800 to-blue-600 p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold mb-6 text-white">Sem-Weebs</h1>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <input
          type="text"
          className="border-2 border-blue-500 p-3 w-1/2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your query"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 relative"
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
              "Artists",
              "Beauty",
              "Cinema",
              "Actors/actresses",
              "Art",
              "Business",
              "Careers",
              "Economics",
              "Family",
              "Finance",
              "Lifestyle",
              "Cars",
              "Luxury",
              "Motorbikes",
              "Racing",
              "Accessories",
              "Clothing",
              "Fashion",
              "Jewellery",
              "Outfits",
              "Modeling",
              "Music",
              "Shows",
              "Comics sketches",
              "Fun",
              "Happiness",
              "Humor",
              "Journalism",
              "Fitness",
              "Gym",
              "Sports",
              "Literature",
              "Adult content",
              "Photography",
              "Animals",
              "Extreme",
              "Outdoor activity",
              "Kids",
              "Gadgets",
              "Nature landscapes",
              "Science",
              "Travel",
              "Retail",
              "Shopping",
              "Computers",
              "Sports with a ball",
              "Toys",
              "Machinery",
              "Technologies",
              "Coaches",
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
          searchResults.map((result, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black to-gray-600 p-6 m-4 rounded-md shadow-lg mb-4 hover:shadow-xl transition duration-300 ease-in-out hover:cursor-pointer"
              // onClick={() => alert("Clicked on " + result.name)}
            >
              <p className="text-2xl text-white font-bold mb-4">
                Name: {result.name}
              </p>
              <p className="text-gray-300">Username: {result.username}</p>
              <Link href={`/${result.username}`}>View Profile</Link>
            </div>
          ))
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
