import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";

type Props = {
  person: Person;
};

export const ItemDescription: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Wikidata Item Description</th>
        <td>{person.itemDescription.value}</td>
      </tr>
    </>
  );
};
