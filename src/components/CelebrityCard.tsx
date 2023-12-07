import Link from "next/link";
import React, { ComponentType } from "react";

export type SearchResults = {
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

type Props = {
  index: number;
  result: SearchResults;
};

export const CelebrityCard: ComponentType<Props> = ({ index, result }) => {
  const imageSrc =
    result.image?.value ||
    "https://animesher.com/orig/1/135/1355/13559/animesher.com_yui-hirasawa-gif-k-on-1355944.gif";
  return (
    <>
      <div key={index} className="card w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt="Description"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title truncate flex-grow flex-shrink max-w-xs">
              {result.username.value}
            </h2>
            <div className="badge badge-secondary ml-2 p-2 whitespace-nowrap">
              Rank #{result.rank.value}
            </div>
          </div>
          <p className="my-2 block font-sans text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 antialiased">
            {result.title?.value || "No Title"}
          </p>
          <div className="card-actions justify-center mb-2">
            {result.categories.value.split(",").map((category, index) => (
              <div key={index} className="badge badge-outline">
                {category}
              </div>
            ))}
          </div>

          <Link
            href={`/${result.username.value}`}
            className="select-none rounded-lg bg-blue-500 dark:bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            View Profile
          </Link>
        </div>
      </div>
    </>
  );
};
