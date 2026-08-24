/** A single unit's entry in sc1_unit_stats.json. */
export interface UnitStats {
  unit: string;
  race: "Protoss" | "Terran" | "Zerg";
  /** Selection size category: "S" | "M" | "L". */
  size: string;
  /** 0 if the unit has no population cost. */
  pop: number;
  /** May include morph costs, e.g. "0 (100)", or a "+" prefix, e.g. "+50". "(None)" if not applicable. */
  minerals: string;
  /** Same non-numeric notation as minerals. "(None)" if not applicable. */
  gas: string;
  /** May include an upgrade range, e.g. "1/3". */
  armor: string;
  hp: number;
  /** Protoss units only; 0 for Terran/Zerg. */
  shield: number;
  /** May include attack-property suffixes (e.g. "10e", "30s") or upgrade ranges. */
  groundAttack: string;
  /** "(None)" if the unit has no air attack. */
  airAttack: string;
  /** May include upgrade ranges or "stim" suffixes, e.g. "15/7.5stim". "(None)" if not applicable. */
  cooldown: string;
  /** May include an upgrade range, e.g. "4/6". */
  range: string;
  /** May include an upgrade range, e.g. "1/2". "(None)" if not applicable. */
  attackMod: string;
  /** May include an upgrade range, e.g. "9/11". */
  sight: string;
  /** Letter codes from the Unit Statistics Key (e.g. "S", "D", "B,S"). "(None)" if there are no notes. */
  notes: string;
  /** May include a morph time, e.g. "25 (50)". "(None)" if not applicable. */
  buildTime: string;
}
