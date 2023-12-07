import Link from "next/link";
import React, { ComponentType } from "react";
import { SearchResults } from "@/pages";

type Props = {
  key: number;
  result: SearchResults;
};

export const SuggestionCard: ComponentType<Props> = ({ key, result }) => {
  const imageSrc =
    result.image?.value ||
    "https://animesher.com/orig/1/135/1355/13559/animesher.com_yui-hirasawa-gif-k-on-1355944.gif";
  const categories = result.categories.value
    ? result.categories.value.split(";")
    : [];
  return (
    <>
      <div key={key} className="card w-96 bg-base-100 shadow-xl">
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
          </div>
          <p className="my-2 block font-sans text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 antialiased">
            {result.title?.value || "No Title"}
          </p>
          <div className="card-actions justify-center mb-2">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div key={index} className="badge badge-outline">
                  {category}
                </div>
              ))
            ) : (
              <div className="badge badge-outline">No Categories</div>
            )}
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
