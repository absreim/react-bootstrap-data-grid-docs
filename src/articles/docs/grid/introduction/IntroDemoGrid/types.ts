export interface MechabellumUnit {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  sourceUrl: string;
  cost: number;
  hp: number;
  speedMps: number;
  atk: number;
  splashRangeM: number;
  attackIntervalS: number;
  rangeM: number;
  target: string;
  unlockCost: number;
  upgradeExp: number;
  rotationSpeedDegPerS: number;
}

export type UnitRow = Omit<MechabellumUnit, "sourceUrl" | "id">;
