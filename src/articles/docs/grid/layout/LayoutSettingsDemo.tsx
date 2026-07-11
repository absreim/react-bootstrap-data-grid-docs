"use client";

import Grid, {
  ColDef,
  GridProps,
  RowDef,
} from "@absreim/react-bootstrap-data-grid/grid";
import { FC, useMemo } from "react";
import Stack from "react-bootstrap/Stack";
import { OptionSet } from "@/assets/examples/types";
import useOptionSelection from "@/assets/examples/useOptionSelection";

// --- Selectable width and height options UI ---

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
