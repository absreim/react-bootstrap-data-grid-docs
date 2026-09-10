import { FC } from 'react';
import { TypeAlias } from "@/static/api/types";
import Badge from "react-bootstrap/Badge";
import TypeParamTable from "@/components/RefArticle/TypeParamTable";
import HighlightDefBlock from "@/components/RefArticle/HighlightDefBlock";

export interface TypeAliasArticleProps {
  typeAlias: TypeAlias;
}

const TypeAliasArticle: FC<TypeAliasArticleProps> = ({ typeAlias }) => {
  return (
    <>
      <h1>
        {typeAlias.name} <Badge>Type</Badge>
      </h1>
      <section>
        {typeAlias.comment.map((commentParagraph, index) => (
          <p key={index}>{commentParagraph}</p>
        ))}
      </section>
      <h2>Definition</h2>
      <HighlightDefBlock tokens={typeAlias.definition} />
      {typeAlias.typeParams.length > 0 && (
        <>
          <h2>Type Params</h2>
          <TypeParamTable typeParams={typeAlias.typeParams} />
        </>
      )}
    </>
  );
}

export default TypeAliasArticle;
