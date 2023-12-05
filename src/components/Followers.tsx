import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";

type Props = {
  person: Person;
};

export const Followers: ComponentType<Props> = ({ person }) => {
  const number = Math.round(parseFloat(person.followers.value));
  const formattedNumber = new Intl.NumberFormat("id-ID").format(number);
  return (
    <>
      <tr className="hover">
        <th scope="row">Followers</th>
        <td>{formattedNumber}</td>
      </tr>
    </>
  );
};
