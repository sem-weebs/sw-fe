import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import Image from "next/image";
import { getImageCaption } from "@/utils/common";

type Props = {
  person: Person;
};

export const PersonalImage: ComponentType<Props> = ({ person }) => {
  return (
    <>
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
            <Image
              alt={"Image"}
              src={person.image.value}
              width={220}
              height={275}
            />
            <div
              style={{
                lineHeight: "normal",
                paddingTop: "0.2em",
              }}
            >
              {getImageCaption(person.image.value)}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
