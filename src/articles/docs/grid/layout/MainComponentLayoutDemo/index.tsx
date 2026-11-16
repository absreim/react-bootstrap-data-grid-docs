"use client";

import Grid, { ColDef, RowDef } from "@absreim/react-bootstrap-data-grid/grid";
import planetData from "./planets.json";
import { Planet } from "./types";
import { FC, ReactNode, useState } from "react";
import Form from "react-bootstrap/Form";

// --- begin data for grid ---
// Data source: Endless Space 2 Fandom

export const cols: ColDef[] = [
  { type: "string", name: "planet", label: "Planet", width: 140 },
  { type: "string", name: "climate", label: "Climate", width: 100 },
  { type: "string", name: "fertility", label: "Fertility", width: 100 },
  {
    type: "number",
    name: "minPopulation",
    label: "Min Population",
    width: 140,
  },
  {
    type: "number",
    name: "maxPopulation",
    label: "Max Population",
    width: 140,
  },
  { type: "number", name: "approval", label: "Approval", width: 100 },
  { type: "number", name: "food", label: "Food", width: 80 },
  { type: "number", name: "industry", label: "Industry", width: 100 },
  { type: "number", name: "dust", label: "Dust", width: 80 },
  { type: "number", name: "science", label: "Science", width: 100 },
  { type: "number", name: "influence", label: "Influence", width: 100 },
  { type: "string", name: "requiredTech", label: "Required Tech", width: 200 },
  {
    type: "string",
    name: "riftbornRequiredTech",
    label: "Riftborn Required Tech",
    width: 230,
  },
  { type: "string", name: "description", label: "Description", width: 700 },
];

const rows: RowDef<Planet>[] = planetData.map((planet) => ({
  id: planet.planet,
  data: planet,
}));

// --- end data for grid ---

// --- start form options setup ---

type GapOptions = Record<string, { label: string; value: number | undefined }>;

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
            onChange={({ target }) => setVal(target.value)}
          />
        );
      })}
    </fieldset>
  );
}

// --- end form options setup ---

const MainComponentLayoutDemo: FC = () => {
  const [mainSpacing, setMainSpacing] = useState<string>("unset");

  return (
    <>
      <Form>
        {getRadioGroup(
          "Main Component Spacing",
          gapOptNameToLabel,
          mainSpacing,
          setMainSpacing,
          "mainSpacingSetting",
        )}
      </Form>
      <Grid
        rows={rows}
        cols={cols}
        width="parent"
        styleOptions={{ mainComponentSpacing: gapOptions[mainSpacing].value }}
        pagination={{ type: "uncontrolled" }}
        allowExport
        filterModel={{ type: "uncontrolled" }}
      />
    </>
  );
}

export default MainComponentLayoutDemo;
