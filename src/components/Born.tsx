import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getAge, getBirthDateString } from "@/utils/common";

type Props = {
  person: Person;
};

export const Born: ComponentType<Props> = ({ person }) => {
  const birthDateString = getBirthDateString(person.birthDate.value);
  const age = getAge(person.birthDate.value);
  return (
    <>
      <tr>
        <th scope="row" className="infobox-label">
          Born
        </th>
        <td className="infobox-data">
          <div style={{ display: "inline" }} className="nickname">
            {person.birthName.value}
          </div>
          <br />
          {birthDateString}
          <span className="noprint ForceAgeToShow"> (age {age})</span>
          <br />
          Honolulu , Hawaii, U.S.
        </td>
      </tr>
    </>
  );
};
