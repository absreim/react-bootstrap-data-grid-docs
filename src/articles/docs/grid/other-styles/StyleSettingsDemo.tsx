"use client";

import Grid, {
  RowDef,
  ColDef,
  GridProps,
} from "@absreim/react-bootstrap-data-grid/grid";
import { FC } from "react";
import Stack from "react-bootstrap/Stack";
import useToggleSwitch from "@/assets/examples/useToggleSwitch";
import useVariantDropdown from "@/assets/examples/useVariantDropdown";
import { OptionSet } from "@/assets/examples/types";
import useOptionSelection from "@/assets/examples/useOptionSelection";

// --- Sample data ---

interface Bg3Skill {
  name: string;
  ability: string;
}

const rows: RowDef<Bg3Skill>[] = [
  {
    id: "athletics",
    data: {
      name: "Athletics",
      ability: "Strength",
    },
  },
  {
    id: "acrobatics",
    data: {
      name: "Acrobatics",
      ability: "Dexterity",
    },
  },
  {
    id: "sleight",
    data: {
      name: "Sleight of Hand",
      ability: "Dexterity",
    },
  },
  {
    id: "stealth",
    data: {
      name: "Stealth",
      ability: "Dexterity",
    },
  },
  {
    id: "arcana",
    data: {
      name: "Arcana",
      ability: "Intelligence",
    },
  },
  {
    id: "history",
    data: {
      name: "History",
      ability: "Intelligence",
    },
  },
  {
    id: "investigation",
    data: {
      name: "Investigation",
      ability: "Intelligence",
    },
  },
  {
    id: "nature",
    data: {
      name: "Nature",
      ability: "Intelligence",
    },
  },
  {
    id: "religion",
    data: {
      name: "Religion",
      ability: "Intelligence",
    },
  },
  {
    id: "animal",
    data: {
      name: "Animal Handling",
      ability: "Wisdom",
    },
  },
  {
    id: "insight",
    data: {
      name: "Insight",
      ability: "Wisdom",
    },
  },
  {
    id: "medicine",
    data: {
      name: "Medicine",
      ability: "Wisdom",
    },
  },
  {
    id: "perception",
    data: {
      name: "Perception",
      ability: "Wisdom",
    },
  },
  {
    id: "survival",
    data: {
      name: "Survival",
      ability: "Wisdom",
    },
  },
  {
    id: "deception",
    data: {
      name: "Deception",
      ability: "Charisma",
    },
  },
  {
    id: "intimidation",
    data: {
      name: "Intimidation",
      ability: "Charisma",
    },
  },
  {
    id: "performance",
    data: {
      name: "Performance",
      ability: "Charisma",
    },
  },
  {
    id: "persuasion",
    data: {
      name: "Persuasion",
      ability: "Charisma",
    },
  },
];

const cols: ColDef[] = [
  {
    name: "name",
    label: "Name",
    type: "string",
  },
  {
    name: "ability",
    label: "Related Ability",
    type: "string",
    width: 175,
  },
];

// --- Radio button fieldset definitions ---

type BorderStyleOptionNames = "unset" | "none" | "horizontal" | "full";
type StripeOptionNames = "unset" | "none" | "rows" | "columns";

const borderStyleOptions: OptionSet<
  BorderStyleOptionNames,
  GridProps["borders"]
> = {
  unset: {
    label: "Unset (same as horizontal)",
    value: undefined,
  },
  none: {
    label: "None",
    value: "none",
  },
  horizontal: {
    label: "Horizontal",
    value: "horizontal",
  },
  full: {
    label: "Full",
    value: "full",
  },
};

const stripeOptions: OptionSet<StripeOptionNames, GridProps["stripes"]> = {
  unset: {
    label: "Unset (same as none)",
    value: undefined,
  },
  none: {
    label: "None",
    value: "none",
  },
  rows: {
    label: "Rows",
    value: "rows",
  },
  columns: {
    label: "Columns",
    value: "columns",
  },
};

// --- Demo component ---

const StyleSettingsDemo: FC = () => {
  const smallGrid = useToggleSwitch("small", "Small Grid");
  const divider = useToggleSwitch("divider", "Enable Divider");
  const hover = useToggleSwitch("hover", "Hover Styles");
  const gridVariant = useVariantDropdown("gridVariant", "Grid Color Variant");
  const borderVariant = useVariantDropdown(
    "borderVariant",
    "Border Color Variant",
  );
  const borderStyleHook = useOptionSelection(
    borderStyleOptions,
    "unset",
    "Border Style",
    "borderStyle",
  );
  const stripeHook = useOptionSelection(
    stripeOptions,
    "unset",
    "Stripes",
    "stripes",
  );

  return (
    <Stack gap={2}>
      <Stack gap={2}>
        {smallGrid.switchUi}
        {divider.switchUi}
        {hover.switchUi}
        {gridVariant.selectUi}
        {borderVariant.selectUi}
        {borderStyleHook.selectionUi}
        {stripeHook.selectionUi}
      </Stack>
      <Grid
        rows={rows}
        cols={cols}
        small={smallGrid.enabled}
        divider={divider.enabled}
        hover={hover.enabled}
        variant={gridVariant.propValue}
        borderVariant={borderVariant.propValue}
        borders={borderStyleHook.value}
        stripes={stripeHook.value}
      />
    </Stack>
  );
};

export default StyleSettingsDemo;
