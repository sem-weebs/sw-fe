import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import Image from "next/image";

type Props = {
  person: Person;
};

export const Signature: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <th colSpan={2} style={{ textAlign: "center", paddingBottom: 0 }}>
        Signature
      </th>
      <tr>
        <td colSpan={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="p-4"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                alt={"Signature"}
                src={person.signature.value}
                width={220}
                height={275}
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
