import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { Signature } from "@/components/Signature";
import { Born } from "@/components/Born";
import { Occupation } from "@/components/Occupation";
import { ActiveSince } from "@/components/ActiveSince";
import { Gender } from "@/components/Gender";
import { Item } from "@/components/Item";
import { ItemDescription } from "@/components/ItemDescription";
import { Categories } from "@/components/Categories";
import { Title } from "@/components/Title";

type Props = {
  person: Person;
};

export const Miscellaneous: ComponentType<Props> = ({ person }) => {
  const hasMiscellaneous =
    person &&
    (person.item?.value ||
      person.itemDescription?.value ||
      person.categories?.value ||
      person.title?.value);

  if (!hasMiscellaneous) {
    return null;
  }
  return (
    <>
      <tr className="hover">
        <th colSpan={2} className="bg-primary" style={{ textAlign: "center" }}>
          Miscellaneous
        </th>
      </tr>
      {person?.categories?.value && <Categories person={person} />}
      {person?.title?.value && <Title person={person} />}
      {person?.item?.value && <Item person={person} />}
      {person?.itemDescription?.value && <ItemDescription person={person} />}
    </>
  );
};
