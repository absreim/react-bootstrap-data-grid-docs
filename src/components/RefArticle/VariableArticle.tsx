import { FC } from "react";
import { Variable } from "@/static/api/types";
import Badge from "react-bootstrap/Badge";
import TokenBlock from "@/components/RefArticle/TokenBlock";

export interface VariableArticleProps {
  variable: Variable;
}

const VariableArticle: FC<VariableArticleProps> = ({ variable }) => {
  return (
    <>
      <h1>
        {variable.name} <Badge>Variable</Badge>
      </h1>
      <section>
        {variable.comment.map((commentParagraph, index) => (
          <p key={index}>{commentParagraph}</p>
        ))}
      </section>
      <h2>Definition</h2>
      <TokenBlock tokens={variable.definition} />
    </>
  );
}

export default VariableArticle;
