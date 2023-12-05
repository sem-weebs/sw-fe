import { Person } from "@/pages/[id]";
import { ComponentType } from "react";

type Props = {
  person: Person;
};

export const Item: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Wikidata item</th>
        <td>
          <a href={person.item.value} className="link link-primary">
            {person.item.value}
          </a>
        </td>
      </tr>
    </>
  );
};
