import { FC, ReactNode } from 'react';
import { Item } from "@/static/api/types";
import InterfaceArticle from "@/components/RefArticle/InterfaceArticle";
import FunctionArticle from "@/components/RefArticle/FunctionArticle";
import TypeAliasArticle from "@/components/RefArticle/TypeAliasArticle";
import VariableArticle from "@/components/RefArticle/VariableArticle";

export interface RefArticleProps {
  item: Item;
}

const RefArticle: FC<RefArticleProps> = ({ item }) => {
  function getArticleNode(): ReactNode {
    switch (item.type) {
      case "interface":
        return <InterfaceArticle interfaceItem={item} />;
      case "function":
        return <FunctionArticle functionItem={item} />;
      case "typeAlias":
        return <TypeAliasArticle typeAlias={item} />;
      default:
        return <VariableArticle variable={item} />;
    }
  }

  return <div className="h-100 overflow-lg-y-auto">{getArticleNode()}</div>;
}

export default RefArticle;
