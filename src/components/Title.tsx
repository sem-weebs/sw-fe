import { Person } from "@/pages/[id]";
import { ComponentType } from "react";

type Props = {
  person: Person;
};

export const Title: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Title</th>
        <td>{person.title.value}</td>
      </tr>
    </>
  );
};
