import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { toTitleCase } from "@/utils/common";

type Props = {
  person: Person;
};

export const Occupation: ComponentType<Props> = ({ person }) => {
  const occupation = person.occupations.value;
  const occupations = occupation.split(";");
  return (
    <>
      <tr className="hover">
        <th scope="row">Occupation</th>
        <td>
          <div className="hlist">
            <ul>
              {occupations.map((job) => (
                <li key={job}>{toTitleCase(job)}</li>
              ))}
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
};
