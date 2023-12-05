import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import Image from "next/image";

type Props = {
  person: Person;
};

export const Signature: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr>
        <th colSpan={2}>Signature</th>
      </tr>
      <tr>
        <td colSpan={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "0.5em",
            }}
          >
            <Image
              alt={person.nativeName.value}
              src={person.signature.value}
              width={220}
              height={275}
            />
          </div>
        </td>
      </tr>
    </>
  );
};
