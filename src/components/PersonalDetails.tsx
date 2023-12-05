import { Person } from "@/pages/[id]";
import { ComponentType } from "react";
import { getYear } from "@/utils/common";
import { Signature } from "@/components/Signature";
import { Born } from "@/components/Born";
import { Occupation } from "@/components/Occupation";

type Props = {
  person: Person;
};

export const PersonalDetails: ComponentType<Props> = ({ person }) => {
  return (
    <>
      <tr>
        <th colSpan={2} className="bg-primary">
          Personal details
        </th>
      </tr>
      <Born person={person} />
      <Occupation person={person} />
      <tr>
        <th scope="row" className="infobox-label">
          Years active
        </th>
        <td className="infobox-data">
          {getYear(person.workDate.value)} - present
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Spouse
        </th>
        <td className="infobox-data">
          <style
            data-mw-deduplicate="TemplateStyles:r1151524712"
            dangerouslySetInnerHTML={{
              __html:
                ".mw-parser-output .marriage-line-margin2px{line-height:0;margin-bottom:-2px}.mw-parser-output .marriage-line-margin3px{line-height:0;margin-bottom:-3px}.mw-parser-output .marriage-display-ws{display:inline;white-space:nowrap}",
            }}
          />
          <div className="marriage-display-ws">
            <div style={{ display: "inline-block", lineHeight: "normal" }}>
              Michelle Robinson
            </div>{" "}
            <div style={{ display: "inline-block" }}>​</div>(
            <abbr title="married">m.</abbr>&nbsp;
            <style
              data-mw-deduplicate="TemplateStyles:r1038841319"
              dangerouslySetInnerHTML={{
                __html:
                  ".mw-parser-output .tooltip-dotted{border-bottom:1px dotted;cursor:help}",
              }}
            />
            <span className="rt-commentedText tooltip" title="October 3, 1992">
              1992
            </span>
            )<wbr />​
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Children
        </th>
        <td className="infobox-data">
          <style
            data-mw-deduplicate="TemplateStyles:r1129693374"
            dangerouslySetInnerHTML={{
              __html:
                '.mw-parser-output .hlist dl,.mw-parser-output .hlist ol,.mw-parser-output .hlist ul{margin:0;padding:0}.mw-parser-output .hlist dd,.mw-parser-output .hlist dt,.mw-parser-output .hlist li{margin:0;display:inline}.mw-parser-output .hlist.inline,.mw-parser-output .hlist.inline dl,.mw-parser-output .hlist.inline ol,.mw-parser-output .hlist.inline ul,.mw-parser-output .hlist dl dl,.mw-parser-output .hlist dl ol,.mw-parser-output .hlist dl ul,.mw-parser-output .hlist ol dl,.mw-parser-output .hlist ol ol,.mw-parser-output .hlist ol ul,.mw-parser-output .hlist ul dl,.mw-parser-output .hlist ul ol,.mw-parser-output .hlist ul ul{display:inline}.mw-parser-output .hlist .mw-empty-li{display:none}.mw-parser-output .hlist dt::after{content:": "}.mw-parser-output .hlist dd::after,.mw-parser-output .hlist li::after{content:" · ";font-weight:bold}.mw-parser-output .hlist dd:last-child::after,.mw-parser-output .hlist dt:last-child::after,.mw-parser-output .hlist li:last-child::after{content:none}.mw-parser-output .hlist dd dd:first-child::before,.mw-parser-output .hlist dd dt:first-child::before,.mw-parser-output .hlist dd li:first-child::before,.mw-parser-output .hlist dt dd:first-child::before,.mw-parser-output .hlist dt dt:first-child::before,.mw-parser-output .hlist dt li:first-child::before,.mw-parser-output .hlist li dd:first-child::before,.mw-parser-output .hlist li dt:first-child::before,.mw-parser-output .hlist li li:first-child::before{content:" (";font-weight:normal}.mw-parser-output .hlist dd dd:last-child::after,.mw-parser-output .hlist dd dt:last-child::after,.mw-parser-output .hlist dd li:last-child::after,.mw-parser-output .hlist dt dd:last-child::after,.mw-parser-output .hlist dt dt:last-child::after,.mw-parser-output .hlist dt li:last-child::after,.mw-parser-output .hlist li dd:last-child::after,.mw-parser-output .hlist li dt:last-child::after,.mw-parser-output .hlist li li:last-child::after{content:")";font-weight:normal}.mw-parser-output .hlist ol{counter-reset:listitem}.mw-parser-output .hlist ol>li{counter-increment:listitem}.mw-parser-output .hlist ol>li::before{content:" "counter(listitem)"\\a0 "}.mw-parser-output .hlist dd ol>li:first-child::before,.mw-parser-output .hlist dt ol>li:first-child::before,.mw-parser-output .hlist li ol>li:first-child::before{content:" ("counter(listitem)"\\a0 "}',
            }}
          />
          <div className="hlist">
            <ul>
              <li>Malia</li>
              <li>Sasha</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Parents
        </th>
        <td className="infobox-data">
          <style
            data-mw-deduplicate="TemplateStyles:r1126788409"
            dangerouslySetInnerHTML={{
              __html:
                ".mw-parser-output .plainlist ol,.mw-parser-output .plainlist ul{line-height:inherit;list-style:none;margin:0;padding:0}.mw-parser-output .plainlist ol li,.mw-parser-output .plainlist ul li{margin-bottom:0}",
            }}
          />
          <div className="plainlist">
            <ul>
              <li>
                <a href="/wiki/Barack_Obama_Sr." title="Barack Obama Sr.">
                  Barack Obama Sr.
                </a>
              </li>
              <li>Ann Dunham</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Relatives
        </th>
        <td className="infobox-data">Obama family</td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Residence
        </th>
        <td className="infobox-data label">
          <a
            href="/wiki/Kalorama,_Washington,_D.C."
            className="mw-redirect"
            title="Kalorama, Washington, D.C."
          >
            Kalorama, Washington, D.C.
          </a>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Alma mater
        </th>
        <td className="infobox-data">
          <link
            rel="mw-deduplicated-inline-style"
            href="mw-data:TemplateStyles:r1126788409"
          />
          <div className="plainlist">
            <ul>
              <li>Columbia University ( BA )</li>
              <li>Harvard University ( JD )</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Awards
        </th>
        <td className="infobox-data">Full list</td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Signature
        </th>
        <td className="infobox-data">
          <span typeof="mw:File">
            <a
              href="/wiki/File:Barack_Obama_signature.svg"
              className="mw-file-description"
              title="Barack Obama's signature"
            >
              <img
                alt="Cursive signature in ink"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Barack_Obama_signature.svg/128px-Barack_Obama_signature.svg.png"
                decoding="async"
                width={128}
                height={31}
                className="mw-file-element"
                srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Barack_Obama_signature.svg/192px-Barack_Obama_signature.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/11/Barack_Obama_signature.svg/256px-Barack_Obama_signature.svg.png 2x"
                data-file-width={512}
                data-file-height={124}
              />
            </a>
          </span>
        </td>
      </tr>
      <tr>
        <th scope="row" className="infobox-label">
          Website
        </th>
        <td className="infobox-data">
          <link
            rel="mw-deduplicated-inline-style"
            href="mw-data:TemplateStyles:r1126788409"
          />
          <div className="plainlist">
            <ul>
              <li>
                <span className="official-website">
                  <span className="url">
                    <a
                      rel="nofollow"
                      className="external text"
                      href="https://barackobama.com"
                    >
                      Official website
                    </a>
                  </span>
                </span>
              </li>
              <li>
                <span className="official-website">
                  <span className="url">
                    <a
                      rel="nofollow"
                      className="external text"
                      href="https://www.obama.org"
                    >
                      Obama Foundation
                    </a>
                  </span>
                </span>
              </li>
              <li>
                <span className="official-website">
                  <span className="url">
                    <a
                      rel="nofollow"
                      className="external text"
                      href="https://obamawhitehouse.archives.gov"
                    >
                      White House Archives
                    </a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <Signature person={person} />
    </>
  );
};
