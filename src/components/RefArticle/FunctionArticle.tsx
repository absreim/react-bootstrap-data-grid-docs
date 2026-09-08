import { FC } from "react";
import { FunctionItem } from "@/static/api/types";
import Badge from "react-bootstrap/Badge";
import TypeParamTable from "@/components/RefArticle/TypeParamTable";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import FunctionParamTable from "@/components/RefArticle/FunctionParamTable";

export interface FunctionArticleProps {
  functionItem: FunctionItem;
}

const FunctionArticle: FC<FunctionArticleProps> = ({ functionItem }) => {
  return (
    <>
      <h1>
        {functionItem.name} <Badge>Function</Badge>
      </h1>
      <section>
        {functionItem.comment.map((commentParagraph, index) => (
          <p key={index}>{commentParagraph}</p>
        ))}
      </section>
      {functionItem.typeParams.length > 0 && (
        <>
          <h2>Type Parameters</h2>
          <TypeParamTable typeParams={functionItem.typeParams} />
        </>
      )}
      <h2>Function Parameters</h2>
      <FunctionParamTable functionParams={functionItem.functionParams} />
      <h2>Return Type</h2>
      <TokenBlock tokens={functionItem.returnType} />
    </>
  );
}

export default FunctionArticle;
