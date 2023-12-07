import { SuggestionCard } from "@/components/SuggestionCard";
import { SearchResults } from "@/pages";
import { ComponentType } from "react";

type Props = {
  suggestions: SearchResults[];
};

export const YouMayAlsoLike: ComponentType<Props> = ({ suggestions }) => {
  if (!suggestions) {
    return null;
  }
  return (
    <>
      <div className="card py-4 bg-primary-content">
        <table className="table">
          <tbody>
            <tr className="hover">
              <th
                colSpan={2}
                className="bg-primary"
                style={{ textAlign: "center" }}
              >
                You May Also Like
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pb-4">
        {suggestions.map((suggestion, index) => (
          <SuggestionCard result={suggestion} key={index} />
        ))}
      </div>
    </>
  );
};
