/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Search } from "@/components/Search";
import { CategoryFilter } from "@/components/CategoryFilter";
import { CelebrityCard } from "@/components/CelebrityCard";
import { API_URL } from "@/utils/constant";

type SearchResults = {
  categories: {
    value: string;
  };
  image?: {
    value: string;
  };
  rank: {
    value: string;
  };
  title?: {
    value: string;
  };
  username: {
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

    const apiUrl = `${API_URL}/search?categories=${categories}&q=${query}`;

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
      <Search
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
        handleSearch={handleSearch}
      />
      <CategoryFilter
        toggleCategories={toggleCategories}
        isCollapsed={isCollapsed}
      />
      <div className="flex items-center justify-center m-8">
        {isLoading ? (
          <img
            src="https://i.imgur.com/S43zUau.gif"
            alt="Loading..."
            className="mb-4 rounded-md w-64"
          />
        ) : searchResults.length !== 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {searchResults.map((result, index) => (
              <CelebrityCard result={result} index={index} key={index} />
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
