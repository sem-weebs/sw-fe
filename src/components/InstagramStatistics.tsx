import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { AudienceCountry } from "@/components/AudienceCountry";
import { AuthenticEngagement } from "@/components/AuthenticEngagement";
import { Country } from "@/components/Country";
import { EngagementAvg } from "@/components/EngagementAvg";
import { Followers } from "@/components/Followers";
import { Instagram } from "@/components/Instagram";
import { Rank } from "@/components/Rank";

type Props = {
  person: Person;
};

export const InstagramStatistics: ComponentType<Props> = ({ person }) => {
  const hasInstagramStatistics =
    person &&
    (person.audienceCountry?.value ||
      person.authenticEngagement?.value ||
      person.country?.value ||
      person.engagementAvg?.value ||
      person.followers?.value ||
      person.link?.value ||
      person.rank?.value);

  if (!hasInstagramStatistics) {
    return null;
  }
  return (
    <>
      <tr className="hover">
        <th colSpan={2} className="bg-primary" style={{ textAlign: "center" }}>
          Instagram Statistics
        </th>
      </tr>
      {person?.audienceCountry?.value && <AudienceCountry person={person} />}
      {person?.authenticEngagement?.value && (
        <AuthenticEngagement person={person} />
      )}
      {person?.country?.value && <Country person={person} />}
      {person?.engagementAvg?.value && <EngagementAvg person={person} />}
      {person?.followers?.value && <Followers person={person} />}
      {person?.link?.value && <Instagram person={person} />}
      {person?.rank?.value && <Rank person={person} />}
    </>
  );
};
