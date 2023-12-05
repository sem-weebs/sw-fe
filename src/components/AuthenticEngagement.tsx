import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";

type Props = {
  person: Person;
};

export const AuthenticEngagement: ComponentType<Props> = ({ person }) => {
  const number = parseInt(person.authenticEngagement.value);
  const formattedNumber = new Intl.NumberFormat("id-ID").format(number);
  return (
    <>
      <tr className="hover">
        <th scope="row">Authentic Engagement</th>
        <td>{formattedNumber}</td>
      </tr>
    </>
  );
};
