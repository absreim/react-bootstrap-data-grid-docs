export interface Reference {
  text: string;
  href: string;
}

export type Token = string | Reference;

export interface TypeParam {
  name: string;
  constraint: Token | null;
  defaultValue: Token | null;
  comment: Token[][];
}

export interface CommentBlock {
  title: string;
  content: Token[][];
}

export interface Member {
  name: string;
  isOptional: boolean;
  definition: Token[];
  comment: CommentBlock[];
}

export interface ItemBase {
  name: string;
  definition: Token[];
}

export interface TopLevelItemBase extends ItemBase {
  proOnly?: boolean;
  comment: CommentBlock[];
}

export interface Interface extends TopLevelItemBase {
  type: "interface";
  extends: Token[];
  typeParams: TypeParam[];
  members: Member[];
}

export interface TypeAlias extends TopLevelItemBase {
  type: "typeAlias";
  typeParams: TypeParam[];
}

export interface Variable extends TopLevelItemBase {
  type: "variable";
}

export interface FunctionParam extends ItemBase {
  type: "functionParam";
  comment: Token[][];
}

export interface FunctionItem extends TopLevelItemBase {
  type: "function";
  typeParams: TypeParam[];
  returnType: Token[];
  functionParams: FunctionParam[];
}

export type Item = Interface | TypeAlias | Variable | FunctionItem;
