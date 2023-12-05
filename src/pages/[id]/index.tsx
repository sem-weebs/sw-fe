import { useRouter } from "next/router";
import { PersonalDetails } from "@/components/PersonalDetails";
import { PersonalImage } from "@/components/PersonalImage";

type Sibling = {
  name: string;
  relation: string;
};

export type Person = {
  name: string;
  image: string;
  signature: string;
  sex: string;
  country: string;
  dateOfBirth: string;
  placeOfBirth: string;
  father: string;
  mother: string;
  sibling: Sibling[];
  children: string[];
};

const mockData: Person = {
  name: "Barack Obama",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
  signature:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Barack_Obama_signature.svg/768px-Barack_Obama_signature.svg.png",
  sex: "Male",
  country: "United States",
  dateOfBirth: "August 4, 1961",
  placeOfBirth: "Honolulu, Hawaii, U.S.",
  father: "Barack Obama Sr.",
  mother: "Ann Dunham",
  sibling: [],
  children: ["Malia Obama", "Sasha Obama"],
};

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const person = mockData;

  return (
    <div className="card px-48 py-4 bg-primary-content">
      <table>
        <tbody>
          <tr>
            <th colSpan={2} style={{ fontSize: "100%" }}>
              <div className="fn" style={{ fontSize: "125%" }}>
                Barack Obama
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
