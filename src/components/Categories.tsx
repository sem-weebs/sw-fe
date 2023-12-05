import { Person } from "@/pages/[id]";
import { ComponentType } from "react";

type Props = {
  person: Person;
};

export const Categories: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Categories</th>
        <td>{person.categories.value}</td>
      </tr>
    </>
  );
};
