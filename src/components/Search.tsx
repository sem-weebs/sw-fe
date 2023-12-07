import React, { ComponentType } from "react";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  isLoading: boolean;
  handleSearch: () => void;
};

export const Search: ComponentType<Props> = ({
  query,
  setQuery,
  isLoading,
  handleSearch,
}) => {
  return (
    <>
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
    </>
  );
};
