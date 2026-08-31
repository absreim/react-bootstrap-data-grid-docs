import { FC } from "react";
import { FunctionItem } from "@/static/api/types";
import Badge from "react-bootstrap/Badge";
import TypeParamTable from "@/components/RefArticle/TypeParamTable";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import FunctionParamTable from "@/components/RefArticle/FunctionParamTable";
import CommentSection from "@/components/RefArticle/CommentSection";
import ProBadge from "@/assets/ProBadge";

export interface FunctionArticleProps {
  functionItem: FunctionItem;
}

const FunctionArticle: FC<FunctionArticleProps> = ({ functionItem }) => {
  return (
    <>
      <h1>
        <Badge>Function</Badge> {functionItem.name}
        {functionItem.proOnly && (
          <>
            {" "}
            <ProBadge />
          </>
        )}
      </h1>
      <h2>Definition</h2>
      <code>
        <TokenBlock tokens={functionItem.definition} />
      </code>
      <h2>Comments</h2>
      <CommentSection commentBlocks={functionItem.comment} />
      {functionItem.typeParams.length > 0 && (
        <>
          <h2>Type Parameters</h2>
          <TypeParamTable typeParams={functionItem.typeParams} />
        </>
      )}
      <h2>Function Parameters</h2>
      <FunctionParamTable functionParams={functionItem.functionParams} />
      <h2>Return Type</h2>
      <code>
        <TokenBlock tokens={functionItem.returnType} />
      </code>
    </>
  );
};

export default FunctionArticle;
