export interface Option<PropValue> {
  label: string;
  value: PropValue;
}

export type OptionSet<OptionName extends string, PropValue> = Record<
  OptionName,
  Option<PropValue>
>;
