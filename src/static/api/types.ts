export interface Reference {
  text: string;
  href: string;
}

export type Token = string | Reference;

export interface TypeParam {
  name: string;
  constraint: Token | null;
  defaultValue: Token | null;
}

export interface Member {
  name: string;
  isOptional: boolean;
  definition: Token[];
  comment: string[];
}

export interface ItemBase {
  name: string;
  comment: string[];
  definition: Token[];
}

export interface Interface extends ItemBase {
  type: "interface";
  extends: Token[];
  typeParams: TypeParam[];
  members: Member[];
}

export interface TypeAlias extends ItemBase {
  type: "typeAlias";
  typeParams: TypeParam[];
}

export interface Variable extends ItemBase {
  type: "variable";
}

export interface FunctionParam extends ItemBase {
  type: "functionParam";
}

export interface FunctionItem extends ItemBase {
  type: "function";
  typeParams: TypeParam[];
  returnType: Token[];
  functionParams: FunctionParam[];
}

export type Item = Interface | TypeAlias | Variable | FunctionItem;
