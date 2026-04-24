import { FC } from "react";
import { getBlogLinkDefs } from "@/lib/getLinkDefs";
import Link from "next/link";

const Page: FC = () => {
  const linkDefs = getBlogLinkDefs();

  return (
    <>
      <h1>react-bootstrap-data-grid Tech Blog</h1>
      <p>
        Throughout the development of react-bootstrap-data-grid, I
        encountered a number of interesting technical challenges with
        interesting solutions. Quite often, it seemed like resources and or
        documentation that led to the solution was sparse or even non-existent.
      </p>
      <p>
        This blog contains articles detailing some of the challenges I
        encountered, the solutions that I found, and any additional thoughts I
        have. See the list of articles below.
      </p>
      <ul>
        {
          linkDefs.map(({ name, path, title }) => (
            <li key={name}>
              <Link href={path}>{title || name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Page;
