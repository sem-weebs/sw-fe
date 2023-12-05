import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";

type Props = {
  person: Person;
};

export const AudienceCountry: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Audience Country</th>
        <td>{person.audienceCountry.value}</td>
      </tr>
    </>
  );
};
