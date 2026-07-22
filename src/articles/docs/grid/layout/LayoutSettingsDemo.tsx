"use client";

import Grid, {
  ColDef,
  GridProps,
  RowDef,
} from "@absreim/react-bootstrap-data-grid/grid";
import { FC, ReactNode, useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

// --- Selectable width and height options UI ---

interface Option<PropValue> {
  label: string;
  value: PropValue;
}

type OptionSet<OptionName extends string, PropValue> = Record<
  OptionName,
  Option<PropValue>
>;

type ColWidthOptionNames = "none" | "100px" | "200px";
type GridDimOptionNames = "none" | "auto" | "parent" | "fixed";

const colWidthOptions: OptionSet<ColWidthOptionNames, ColDef["width"]> = {
  none: {
    label: "None (same as 100px)",
    value: undefined,
  },
  "100px": {
    label: "100px",
    value: 100,
  },
  "200px": {
    label: "200px",
    value: 200,
  },
};

const gridWidthOptions: OptionSet<GridDimOptionNames, GridProps["width"]> = {
  none: {
    label: 'None (same as "auto")',
    value: undefined,
  },
  auto: {
    label: "Auto",
    value: "auto",
  },
  parent: {
    label: "Parent",
    value: "parent",
  },
  fixed: {
    label: "Fixed (250px)",
    value: 250,
  },
};

const gridHeightOptions: OptionSet<GridDimOptionNames, GridProps["height"]> = {
  none: {
    label: 'None (same as "auto")',
    value: undefined,
  },
  auto: {
    label: "Auto",
    value: "auto",
  },
  parent: {
    label: "Parent",
    value: "parent",
  },
  fixed: {
    label: "Fixed (200px)",
    value: 200,
  },
};

interface UseOptionSelectionHook<PropValue> {
  value: PropValue;
  selectionUi: ReactNode;
}

function useOptionSelection<OptionName extends string, PropValue>(
  options: OptionSet<OptionName, PropValue>,
  startValue: OptionName,
  legend: string,
  optionTypeId: string,
): UseOptionSelectionHook<PropValue> {
  const [selectedOption, setSelectedOption] = useState<OptionName>(startValue);

  const selectionUi = (
    <fieldset>
      <legend>{legend}</legend>
      {Object.keys(options).map((optionName) => {
        const { label } = options[optionName as OptionName];
        return (
          <Form.Check
            key={optionName}
            type="radio"
            id={`${optionTypeId}-${optionName}`}
            label={label}
            checked={selectedOption === optionName}
            onChange={() => setSelectedOption(optionName as OptionName)}
          />
        );
      })}
    </fieldset>
  );

  return {
    value: options[selectedOption].value,
    selectionUi,
  };
}

// --- Sample data ---

interface CompanyInfo {
  name: string;
  marketCap: number;
}

const rows: RowDef<CompanyInfo>[] = [
  {
    id: "nvda",
    data: {
      name: "Nvidia",
      marketCap: 4.9,
    },
  },
  {
    id: "goog",
    data: {
      name: "Alphabet",
      marketCap: 4.7,
    },
  },
  {
    id: "aapl",
    data: {
      name: "Apple",
      marketCap: 4.2,
    },
  },
  {
    id: "msft",
    data: {
      name: "Microsoft",
      marketCap: 3.0,
    },
  },
  {
    id: "amzn",
    data: {
      name: "Amazon",
      marketCap: 2.9,
    },
  },
  {
    id: "meta",
    data: {
      name: "Meta Platforms",
      marketCap: 1.5,
    },
  },
  {
    id: "tsla",
    data: {
      name: "Tesla",
      marketCap: 1.5,
    },
  },
];

const getCols: (widthSetting: ColDef["width"]) => ColDef[] = (widthSetting) => [
  {
    name: "name",
    type: "string",
    label: "Company Name",
    width: widthSetting,
  },
  {
    name: "marketCap",
    type: "number",
    label: "Market Cap (USD, trillions)",
    width: widthSetting,
  },
];

// --- Demo component ---

const LayoutSettingsDemo: FC = () => {
  const colWidthOptionHook = useOptionSelection(
    colWidthOptions,
    "none",
    "Column Width Settings",
    "colWidth",
  );
  const gridWidthOptionsHook = useOptionSelection(
    gridWidthOptions,
    "none",
    "Grid Width Settings",
    "gridWidth",
  );
  const gridHeightOptionsHook = useOptionSelection(
    gridHeightOptions,
    "none",
    "Grid Height Settings",
    "gridHeight",
  );

  const cols = useMemo(
    () => getCols(colWidthOptionHook.value),
    [colWidthOptionHook.value],
  );

  return (
    <Stack gap={2}>
      <Stack gap={2}>
        {colWidthOptionHook.selectionUi}
        {gridWidthOptionsHook.selectionUi}
        {gridHeightOptionsHook.selectionUi}
      </Stack>
      <div
        style={{
          width: 300,
          height: 300,
        }}
        className="overflow-auto border"
      >
        <Grid
          rows={rows}
          cols={cols}
          width={gridWidthOptionsHook.value}
          height={gridHeightOptionsHook.value}
          borders="full"
          borderVariant="primary"
        />
      </div>
    </Stack>
  );
};

export default LayoutSettingsDemo;
