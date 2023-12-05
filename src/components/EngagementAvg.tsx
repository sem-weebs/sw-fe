import { Person } from "@/pages/[id]";
import { ComponentType } from "react";

type Props = {
  person: Person;
};

export const EngagementAvg: ComponentType<Props> = ({ person }) => {
  const number = parseInt(person.engagementAvg.value);
  const formattedNumber = new Intl.NumberFormat("id-ID").format(number);
  return (
    <>
      <tr className="hover">
        <th scope="row">Engagement Average</th>
        <td>{formattedNumber}</td>
      </tr>
    </>
  );
};
