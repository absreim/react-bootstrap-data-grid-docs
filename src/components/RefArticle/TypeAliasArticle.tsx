import { FC } from "react";
import { TypeAlias } from "@/static/api/types";
import Badge from "react-bootstrap/Badge";
import TypeParamTable from "@/components/RefArticle/TypeParamTable";
import CommentSection from "@/components/RefArticle/CommentSection";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import ProBadge from "@/assets/ProBadge";

export interface TypeAliasArticleProps {
  typeAlias: TypeAlias;
}

const TypeAliasArticle: FC<TypeAliasArticleProps> = ({ typeAlias }) => {
  return (
    <>
      <h1>
        <Badge>Type</Badge> {typeAlias.name}
        {typeAlias.proOnly && (
          <>
            {" "}
            <ProBadge />
          </>
        )}
      </h1>
      <h2>Definition</h2>
      <code>
        <TokenBlock tokens={typeAlias.definition} />
      </code>
      <h2>Comments</h2>
      <CommentSection commentBlocks={typeAlias.comment} />
      {typeAlias.typeParams.length > 0 && (
        <>
          <h2>Type Params</h2>
          <TypeParamTable typeParams={typeAlias.typeParams} />
        </>
      )}
    </>
  );
};

export default TypeAliasArticle;
