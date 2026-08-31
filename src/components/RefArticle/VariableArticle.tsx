import { FC } from "react";
import { Variable } from "@/static/api/types";
import Badge from "react-bootstrap/Badge";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import CommentSection from "@/components/RefArticle/CommentSection";
import ProBadge from "@/assets/ProBadge";

export interface VariableArticleProps {
  variable: Variable;
}

const VariableArticle: FC<VariableArticleProps> = ({ variable }) => {
  return (
    <>
      <h1>
        <Badge>Variable</Badge> {variable.name}
        {variable.proOnly && (
          <>
            {" "}
            <ProBadge />
          </>
        )}
      </h1>
      <h2>Definition</h2>
      <code>
        <TokenBlock tokens={variable.definition} />
      </code>
      <h2>Comments</h2>
      <CommentSection commentBlocks={variable.comment} />
    </>
  );
};

export default VariableArticle;
