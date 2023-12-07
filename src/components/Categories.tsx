import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import {toTitleCase} from "@/utils/common";

type Props = {
  person: Person;
};

export const Categories: ComponentType<Props> = ({ person }) => {
    const category = person.categories.value;
    const categories = category.split(",");
  return (
    <>
        <tr className="hover">
            <th scope="row">Categories</th>
            <td>
                <div className="hlist">
                    <ul>
                        {categories.map((cat) => (
                            <li key={cat}>{toTitleCase(cat)}</li>
                        ))}
                    </ul>
                </div>
            </td>
        </tr>
    </>
  );
};
