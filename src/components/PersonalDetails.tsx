import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { Signature } from "@/components/Signature";
import { Born } from "@/components/Born";
import { Occupation } from "@/components/Occupation";
import { ActiveSince } from "@/components/ActiveSince";
import { Gender } from "@/components/Gender";
import { Citizenship } from "@/components/Citizenship";

type Props = {
  person: Person;
};

export const PersonalDetails: ComponentType<Props> = ({ person }) => {
  const hasPersonalDetails =
    person &&
    (person.gender?.value ||
      person.birthDate?.value ||
      person.birthName?.value ||
      person.citizenship?.value ||
      person.occupations?.value ||
      person.workDate?.value ||
      person.signature?.value);

  if (!hasPersonalDetails) {
    return null;
  }

  const hasBorn = person?.birthDate?.value || person?.birthName?.value;
  return (
    <>
      <tr className="hover">
        <th colSpan={2} className="bg-primary" style={{ textAlign: "center" }}>
          Personal Details
        </th>
      </tr>
      {person?.workDate?.value && <ActiveSince person={person} />}

      {hasBorn && <Born person={person} />}
      {person?.citizenship?.value && <Citizenship person={person} />}
      {person?.gender?.value && <Gender person={person} />}
      {person?.occupations?.value && <Occupation person={person} />}
      {person?.signature?.value && <Signature person={person} />}
    </>
  );
};
