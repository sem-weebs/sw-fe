import { useRouter } from "next/router";
import { PersonalDetails } from "@/components/PersonalDetails";
import { PersonalImage } from "@/components/PersonalImage";
import { useEffect, useState } from "react";
import { InstagramStatistics } from "@/components/InstagramStatistics";
import { Miscellaneous } from "@/components/Miscellaneous";

type Object = {
  value: string;
};

export type Person = {
  audienceCountry: Object; // Done - Instagram Statistics
  authenticEngagement: Object; // Done - Instagram Statistics
  birthDate: Object; // Done - Personal Details
  birthName: Object; // Done - Personal Details
  birthPlace: Object; // Done - Personal Details
  categories: Object; // Done - Miscellaneous
  citizenship: Object; // Done - Personal Details
  country: Object; // Done - Instagram Statistics
  engagementAvg: Object; // Done - Instagram Statistics
  followers: Object; // Done - Instagram Statistics
  gender: Object; // Done - Personal Details
  image: Object; // Done - Personal Image
  item: Object; // Done - Miscellaneous
  itemDescription: Object; // Done - Miscellaneous
  link: Object; // Done - Instagram Statistics
  nativeName: Object; // Done - Personal Details
  occupations: Object; // Done - Personal Details
  rank: Object; // Done - Instagram Statistics
  signature: Object; // Done - Personal Details
  title: Object; // Done - Miscellaneous
  workDate: Object; // Done - Personal Details
};

const Detail = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/details?username=${id}`,
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPerson(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, [id]);

  if (!person) {
    return (
      <div>
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="card px-96 py-4 bg-primary-content">
      <table className="table">
        <tbody>
          <tr>
            <th colSpan={2} style={{ fontSize: "100%", textAlign: "center" }}>
              <div className="fn" style={{ fontSize: "125%" }}>
                {person?.nativeName?.value
                  ? person.nativeName.value
                  : person?.birthName?.value}
              </div>
            </th>
          </tr>
          {person?.image?.value && <PersonalImage person={person} />}
          <PersonalDetails person={person} />
          <InstagramStatistics person={person} />
          <Miscellaneous person={person} />
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
