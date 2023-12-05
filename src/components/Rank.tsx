import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";

type Props = {
  person: Person;
};

export const Rank: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Rank</th>
        <td>{person.rank.value}</td>
      </tr>
    </>
  );
};
