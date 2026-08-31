import { FC, Fragment } from "react";
import { CommentBlock } from "@/static/api/types";
import {
  commentSectionDisplayNames,
} from "@/components/RefArticle/constants";
import TokenBlock from "@/components/RefArticle/TokenBlock";
import { COMMENT_SUMMARY_SECTION_NAME } from "@/static/constants";

export interface CommentSectionProps {
  commentBlocks: CommentBlock[];
}

const CommentSection: FC<CommentSectionProps> = ({ commentBlocks }) => {
  return (
    <>
      {commentBlocks.map((commentBlock) => (
        <Fragment key={commentBlock.title}>
          {commentBlock.title !== COMMENT_SUMMARY_SECTION_NAME && (
            <h3>
              {commentSectionDisplayNames[commentBlock.title] ||
                commentBlock.title}
            </h3>
          )}
          {commentBlock.content.map((tokens, index) => (
            <p key={index}>
              <TokenBlock tokens={tokens} />
            </p>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default CommentSection;
