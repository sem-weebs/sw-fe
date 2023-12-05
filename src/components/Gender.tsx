import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { toTitleCase } from "@/utils/common";

type Props = {
  person: Person;
};

export const Gender: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Gender</th>
        <td>{toTitleCase(person.gender.value)}</td>
      </tr>
    </>
  );
};
