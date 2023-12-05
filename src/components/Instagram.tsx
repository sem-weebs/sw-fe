import { Person } from "@/pages/[id]";
import { ComponentType } from "react";

type Props = {
  person: Person;
};

export const Instagram: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr className="hover">
        <th scope="row">Instagram</th>
        <td>
          <a href={person.link.value} className="link link-primary">
            {person.link.value}
          </a>
        </td>
      </tr>
    </>
  );
};
