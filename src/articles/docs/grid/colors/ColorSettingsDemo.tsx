"use client";

import Grid, {
  GridProps,
  RowDef,
  ColDef,
} from "@absreim/react-bootstrap-data-grid/grid";
import { FC } from "react";
import Stack from "react-bootstrap/Stack";
import useVariantDropdown from "@/assets/examples/useVariantDropdown";
import useToggleSwitch from "@/assets/examples/useToggleSwitch";

// --- Sample data ---

interface Bg3Class {
  name: string;
  primaryAttribute: string;
  savingThrowProficiencies: string;
  spellcastingAbility: string;
  armorProficiency: string;
}

const cols: ColDef[] = [
  {
    name: "name",
    label: "Name",
    type: "string",
  },
  {
    name: "primaryAttribute",
    label: "Primary Attribute",
    type: "string",
    width: 200,
  },
  {
    name: "savingThrowProficiencies",
    label: "Saving Throw Proficiencies",
    type: "string",
    width: 250,
  },
  {
    name: "spellcastingAbility",
    label: "Spellcasting Ability",
    type: "string",
    width: 200,
  },
  {
    name: "armorProficiency",
    label: "Armor Proficiency",
    type: "string",
    width: 200,
  },
];

const rows: RowDef<Bg3Class>[] = [
  {
    id: "barbarian",
    data: {
      name: "Barbarian",
      primaryAttribute: "Strength",
      savingThrowProficiencies: "Strength, Constitution",
      spellcastingAbility: "Charisma",
      armorProficiency: "Medium",
    },
  },
  {
    id: "bard",
    data: {
      name: "Bard",
      primaryAttribute: "Charisma",
      savingThrowProficiencies: "Charisma, Dexterity",
      spellcastingAbility: "Charisma",
      armorProficiency: "Light",
    },
  },
  {
    id: "cleric",
    data: {
      name: "Cleric",
      primaryAttribute: "Wisdom",
      savingThrowProficiencies: "Wisdom, Charisma",
      spellcastingAbility: "Wisdom",
      armorProficiency: "Medium",
    },
  },
  {
    id: "druid",
    data: {
      name: "Druid",
      primaryAttribute: "Wisdom",
      savingThrowProficiencies: "Wisdom, Intelligence",
      spellcastingAbility: "Wisdom",
      armorProficiency: "Medium",
    },
  },
  {
    id: "fighter",
    data: {
      name: "Fighter",
      primaryAttribute: "Strength",
      savingThrowProficiencies: "Strength, Constitution",
      spellcastingAbility: "Intelligence",
      armorProficiency: "Heavy",
    },
  },
  {
    id: "monk",
    data: {
      name: "Monk",
      primaryAttribute: "Dexterity",
      savingThrowProficiencies: "Dexterity, Strength",
      spellcastingAbility: "Wisdom",
      armorProficiency: "None",
    },
  },
  {
    id: "paladin",
    data: {
      name: "Paladin",
      primaryAttribute: "Strength",
      savingThrowProficiencies: "Wisdom, Charisma",
      spellcastingAbility: "Charisma",
      armorProficiency: "Heavy",
    },
  },
  {
    id: "ranger",
    data: {
      name: "Ranger",
      primaryAttribute: "Dexterity",
      savingThrowProficiencies: "Dexterity, Strength",
      spellcastingAbility: "Wisdom",
      armorProficiency: "Medium",
    },
  },
  {
    id: "rogue",
    data: {
      name: "Rogue",
      primaryAttribute: "Dexterity",
      savingThrowProficiencies: "Dexterity, Intelligence",
      spellcastingAbility: "Intelligence",
      armorProficiency: "Light",
    },
  },
  {
    id: "sorcerer",
    data: {
      name: "Sorcerer",
      primaryAttribute: "Charisma",
      savingThrowProficiencies: "Charisma, Constitution",
      spellcastingAbility: "Charisma",
      armorProficiency: "None",
    },
  },
  {
    id: "warlock",
    data: {
      name: "Warlock",
      primaryAttribute: "Charisma",
      savingThrowProficiencies: "Charisma, Wisdom",
      spellcastingAbility: "Charisma",
      armorProficiency: "Light",
    },
  },
  {
    id: "wizard",
    data: {
      name: "Wizard",
      primaryAttribute: "Intelligence",
      savingThrowProficiencies: "Intelligence, Wisdom",
      spellcastingAbility: "Intelligence",
      armorProficiency: "None",
    },
  },
];

// --- Cell and row color variant functions ---

const headerCellsFn: GridProps["headerCellVariant"] = (_, colIndex) => {
  if (colIndex % 2 === 0) {
    return "primary";
  }

  return null;
};

const bodyRowsFn: GridProps["bodyRowVariant"] = (_, displayIndex) => {
  if (displayIndex % 2 === 0) {
    return "success";
  }

  return null;
};

const bodyCellsFn: GridProps["bodyCellVariant"] = (
  _,
  __,
  colIndex,
  displayIndex,
) => {
  if (colIndex === displayIndex) {
    return "info";
  }

  return null;
};

// --- Demo component ---

const ColorSettingsDemo: FC = () => {
  const gridVariant = useVariantDropdown("grid", "Grid-wide Variant");
  const headerRowVariant = useVariantDropdown(
    "headerRow",
    "Header Row Variant",
  );
  const borderVariant = useVariantDropdown("border", "Border Variant");
  const headerCells = useToggleSwitch(
    "headerCells",
    "Enable Header Cell Variants",
  );
  const bodyRows = useToggleSwitch("bodyRows", "Enable Body Row Variants");
  const bodyCells = useToggleSwitch("bodyCells", "Enable Body Cell Variants");

  return (
    <Stack gap={2}>
      {gridVariant.selectUi}
      {headerRowVariant.selectUi}
      {borderVariant.selectUi}
      {headerCells.switchUi}
      {bodyRows.switchUi}
      {bodyCells.switchUi}
      <Grid
        width="parent"
        rows={rows}
        cols={cols}
        variant={gridVariant.propValue}
        headerRowVariant={headerRowVariant.propValue}
        borderVariant={borderVariant.propValue}
        headerCellVariant={headerCells.enabled ? headerCellsFn : undefined}
        bodyRowVariant={bodyRows.enabled ? bodyRowsFn : undefined}
        bodyCellVariant={bodyCells.enabled ? bodyCellsFn : undefined}
      />
    </Stack>
  );
};

export default ColorSettingsDemo;
