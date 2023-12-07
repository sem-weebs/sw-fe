import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { toTitleCase } from "@/utils/common";

type Props = {
  person: Person;
};

export const Citizenship: ComponentType<Props> = ({ person }) => {
  const citizenship = person.citizenship.value;
  const citizenshipList = citizenship.split(",");

  return (
    <>
      <tr className="hover">
        <th scope="row">Citizenship</th>
        <td>
          <div className="hlist">
            <ul>
              {citizenshipList.map((cit) => (
                <li key={cit}>{toTitleCase(cit)}</li>
              ))}
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
};
