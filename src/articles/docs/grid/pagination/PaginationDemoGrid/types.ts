/** One element of the top-level array in trinkets.json. */
export interface Trinket {
  trinket: string;
  rarity: string;
  dlc: string;
  area: string;
  effectCount: number;
  effects: string;

  /** Numeric columns below are 0 unless the trinket has a plain, unconditional effect of that kind. */
  maxHpPct: number;
  dodge: number;
  protPct: number;
  speed: number;
  accuracy: number;
  critPct: number;
  damagePct: number;
  stressTakenPct: number;
  stunRes: number;
  blightRes: number;
  bleedRes: number;
  diseaseRes: number;
  moveRes: number;
  debuffRes: number;
  deathblowRes: number;
  trapRes: number;
}
