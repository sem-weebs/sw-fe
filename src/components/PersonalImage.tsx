import { Person } from "@/pages/[id]";
import { ComponentType } from "react";

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
              paddingTop: "0.5em",
            }}
          >
            <img
              alt="Obama standing in the Oval Office with his arms folded and smiling"
              src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg"
              width={220}
              height={275}
            />
            <div
              style={{
                lineHeight: "normal",
                paddingTop: "0.2em",
                paddingBottom: "0.5em",
              }}
            >
              Official portrait, 2012
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
