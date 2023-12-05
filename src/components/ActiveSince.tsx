import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";

type Props = {
  person: Person;
};

export const ActiveSince: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Active Since</th>
        <td>{getYear(person.workDate.value)}</td>
      </tr>
    </>
  );
};
