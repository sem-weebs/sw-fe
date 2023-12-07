import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getAge, getBirthDateString } from "@/utils/common";

type Props = {
  person: Person;
};

export const Born: ComponentType<Props> = ({ person }) => {
  let birthDateString: string | null = null;
  let age: number | null = null;

  if (person?.birthDate?.value) {
    birthDateString = getBirthDateString(person.birthDate.value);
    age = getAge(person.birthDate.value);
  }

  return (
    <>
      <tr className="hover">
        <th scope="row">Born</th>
        <td>
          {person?.birthName?.value && (
            <div style={{ display: "inline" }}>
              {person?.birthName?.value}
              <br></br>
            </div>
          )}
          {birthDateString && birthDateString}
          {age && <span> (age {age})</span>}
          {birthDateString || age ? <br /> : null}
          {person?.birthPlace?.value && person.birthPlace.value}
        </td>
      </tr>
    </>
  );
};
