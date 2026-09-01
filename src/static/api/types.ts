export interface Reference {
  text: string;
  href: string;
}

export type Token = string | Reference;

export interface TypeParam {
  constraint: Token;
  default?: Token;
}

export interface Member {
  name: string;
  isOptional: boolean;
  definition: Token[];
  comment: string;
}

export interface ApiItemBase {
  name: string;
  comment: string;
}

export interface Interface extends ApiItemBase {
  type: "interface";
  extends: Token[];
  typeParams: TypeParam[];
  members: Member[];
}

export interface Type extends ApiItemBase {
  type: "type";
  typeParams: TypeParam[];
  definition: Token[];
}

export interface Variable extends ApiItemBase {
  type: "variable";
  definition: Token[];
}

export interface FunctionParam {
  name: string;
  type: Token[];
}

export interface Function extends ApiItemBase {
  type: "function";
  typeParams: TypeParam[];
  returnType: Token[];
}

export type ApiItem = Interface | Type | Variable | Function;
