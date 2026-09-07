export interface Reference {
  text: string;
  href: string;
}

export type Token = string | Reference;

export interface TypeParam {
  constraint: Token | null;
  default: Token | null;
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
}

export interface Interface extends ItemBase {
  type: "interface";
  extends: Token[];
  typeParams: TypeParam[];
  members: Member[];
}

export interface Type extends ItemBase {
  type: "type";
  typeParams: TypeParam[];
  definition: Token[];
}

export interface Variable extends ItemBase {
  type: "variable";
  definition: Token[];
}

export interface FunctionParam {
  name: string;
  type: Token[];
}

export interface Function extends ItemBase {
  type: "function";
  typeParams: TypeParam[];
  returnType: Token[];
}

export type Item = Interface | Type | Variable | Function;
