import { useRouter } from "next/router";
import { PersonalDetails } from "@/components/PersonalDetails";
import { PersonalImage } from "@/components/PersonalImage";
import { useEffect, useState } from "react";

type Object = {
  value: string;
};

export type Person = {
  birthDate: Object;
  birthName: Object;
  citizenship: Object;
  gender: Object;
  image: Object;
  itemDescription: Object;
  nativeName: Object;
  occupations: Object;
  signature: Object;
  workDate: Object;
};

const Detail = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("username", id);
        const response = await fetch(
          `http://127.0.0.1:5000/details?username=${id}`,
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPerson(data);
        console.log("lol", data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, [id]);

  if (!person) {
    return;
  }

  return (
    <div className="card px-48 py-4 bg-primary-content">
      <table>
        <tbody>
          <tr>
            <th colSpan={2} style={{ fontSize: "100%" }}>
              <div className="fn" style={{ fontSize: "125%" }}>
                {person?.nativeName.value}
              </div>
            </th>
          </tr>
          <PersonalImage person={person} />
          <PersonalDetails person={person} />
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
