"use client";

import Grid, { ColDef, RowDef } from "@absreim/react-bootstrap-data-grid/grid";
import { Trinket } from "./types";
import trinketData from "./trinkets.json";
import { FC, ReactNode, useState } from "react";
import Form from "react-bootstrap/Form";

// --- data to display ---

const trinketColumns: ColDef[] = [
  { type: "string", name: "trinket", label: "Trinket", width: 200 },
  { type: "string", name: "rarity", label: "Rarity", width: 130 },
  { type: "string", name: "dlc", label: "DLC", width: 170 },
  { type: "string", name: "area", label: "Area / Cost", width: 160 },
  { type: "number", name: "effectCount", label: "Effect Count", width: 130 },
  { type: "string", name: "effects", label: "Effects", width: 480 },
  { type: "number", name: "maxHpPct", label: "Max HP %", width: 110 },
  { type: "number", name: "dodge", label: "Dodge", width: 90 },
  { type: "number", name: "protPct", label: "Prot %", width: 90 },
  { type: "number", name: "speed", label: "Speed", width: 90 },
  { type: "number", name: "accuracy", label: "Accuracy", width: 110 },
  { type: "number", name: "critPct", label: "Crit %", width: 90 },
  { type: "number", name: "damagePct", label: "Damage %", width: 110 },
  {
    type: "number",
    name: "stressTakenPct",
    label: "Stress Taken %",
    width: 140,
  },
  { type: "number", name: "stunRes", label: "Stun Res %", width: 120 },
  { type: "number", name: "blightRes", label: "Blight Res %", width: 130 },
  { type: "number", name: "bleedRes", label: "Bleed Res %", width: 130 },
  { type: "number", name: "diseaseRes", label: "Disease Res %", width: 140 },
  { type: "number", name: "moveRes", label: "Move Res %", width: 120 },
  { type: "number", name: "debuffRes", label: "Debuff Res %", width: 130 },
  {
    type: "number",
    name: "deathblowRes",
    label: "Deathblow Res %",
    width: 150,
  },
  { type: "number", name: "trapRes", label: "Trap Res %", width: 120 },
];

trinketColumns.forEach((trinket) => {
  trinket.sortable = true;
});

const rows: RowDef<Trinket>[] = trinketData.map((trinket) => ({
  id: trinket.trinket,
  data: trinket,
}));

// --- end data to display ---

// --- display options selection ---

type BooleanOptionName = "true" | "false" | "unset";
type BooleanOptions = Record<
  BooleanOptionName,
  { label: string; value: boolean | undefined }
>;
type GapOptions = Record<string, { label: string; value: number | undefined }>;
type AlignSettingString = "left" | "center" | "right";
type AlignOptions = Record<
  AlignSettingString | "unset",
  { label: string; value: AlignSettingString | undefined }
>;

const booleanOptions: BooleanOptions = {
  unset: {
    label: "Unset (same as false)",
    value: undefined,
  },
  false: {
    label: "False",
    value: false,
  },
  true: {
    label: "True",
    value: true,
  },
};
const booleanOptNameToLabel = Object.keys(booleanOptions).reduce(
  (prev, curr) => {
    prev[curr] = booleanOptions[curr as BooleanOptionName].label;
    return prev;
  },
  {} as Record<string, string>,
);

const gapOptions: GapOptions = [0, 1, 2, 3, 4, 5].reduce(
  (prev, curr) => {
    prev[String(curr)] = {
      label: String(curr),
      value: curr,
    };
    return prev;
  },
  {
    unset: {
      label: "Unset (same as 2)",
      value: undefined,
    },
  } as GapOptions,
);
const gapOptNameToLabel = Object.keys(gapOptions).reduce(
  (prev, curr) => {
    prev[curr] = gapOptions[curr].label;
    return prev;
  },
  {} as Record<string, string>,
);

const alignOptions: AlignOptions = {
  unset: {
    label: "Unset (same as right)",
    value: undefined,
  },
  left: {
    label: "Left",
    value: "left",
  },
  center: {
    label: "Center",
    value: "center",
  },
  right: {
    label: "Right",
    value: "right",
  },
};
const alignOptNameToLabel = Object.keys(alignOptions).reduce(
  (prev, curr) => {
    prev[curr] = alignOptions[curr as AlignSettingString | "unset"].label;
    return prev;
  },
  {} as Record<string, string>,
);

function getRadioGroup(
  legend: string,
  optionLabels: Record<string, string>,
  currentVal: string,
  setVal: (val: string) => void,
  settingTypeId: string,
): ReactNode {
  return (
    <fieldset key={settingTypeId}>
      <legend>{legend}</legend>
      {Object.keys(optionLabels).map((optionName) => {
        return (
          <Form.Check
            key={optionName}
            type="radio"
            id={`${settingTypeId}-${optionName}`}
            label={optionLabels[optionName]}
            checked={currentVal === optionName}
            value={optionName}
            onChange={({ target }) => setVal(target.value as BooleanOptionName)}
          />
        );
      })}
    </fieldset>
  );
}

// --- end display options selection ---

const PaginationDemoGrid: FC = () => {
  const [aboveMain, setAboveMain] = useState<string>("unset");
  const [sizeAfterPageNum, setSizeAfterPageNum] = useState<string>("unset");
  const [horizAlign, setHorizAlign] = useState<string>("unset");
  const [mainSpacing, setMainSpacing] = useState<string>("unset");
  const [pageSpacing, setPageSpacing] = useState<string>("unset");

  return (
    <>
      <Form>
        {getRadioGroup(
          "Pagination UI Above Grid",
          booleanOptNameToLabel,
          aboveMain,
          setAboveMain,
          "aboveGridSetting",
        )}
        {getRadioGroup(
          "Page Size Select after Page Num Select",
          booleanOptNameToLabel,
          sizeAfterPageNum,
          setSizeAfterPageNum,
          "afterPageSizeSetting",
        )}
        {getRadioGroup(
          "Pagination Component Alignment",
          alignOptNameToLabel,
          horizAlign,
          setHorizAlign,
          "horizAlignSetting",
        )}
        {getRadioGroup(
          "Main Component Spacing",
          gapOptNameToLabel,
          mainSpacing,
          setMainSpacing,
          "mainSpacingSetting",
        )}
        {getRadioGroup(
          "Pagination Component Spacing",
          gapOptNameToLabel,
          pageSpacing,
          setPageSpacing,
          "pageSpacingSetting",
        )}
      </Form>
      <Grid
        rows={rows}
        cols={trinketColumns}
        width="parent"
        sortModel={{ type: "uncontrolled", initialSortColDef: null }}
        pagination={{
          type: "uncontrolled",
          styleOptions: {
            aboveMainComponent:
              booleanOptions[aboveMain as BooleanOptionName].value,
            sizeSelectAfterPageSelect:
              booleanOptions[sizeAfterPageNum as BooleanOptionName].value,
            horizontalAlignment:
              alignOptions[horizAlign as AlignSettingString | "unset"].value,
            mainComponentSpacing: gapOptions[mainSpacing].value,
            paginationComponentSpacing: gapOptions[pageSpacing].value,
          },
        }}
      />
    </>
  );
};

export default PaginationDemoGrid;
