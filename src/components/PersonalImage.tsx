import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import Image from "next/image";
import { getImageCaption } from "@/utils/common";

type Props = {
  person: Person;
};

export const PersonalImage: ComponentType<Props> = ({ person }) => {
  const imageUrl = person?.image?.value || "https://i.imgur.com/OFbQiB7.jpg";
  const imageCaption = person?.image?.value
    ? getImageCaption(person.image.value)
    : "Caption not available";
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
            <Image alt={"Image"} src={imageUrl} width={220} height={275} />
            <div
              style={{
                lineHeight: "normal",
                paddingTop: "0.5em",
              }}
            >
              {imageCaption}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
