/** One element of the top-level array in heroes.json. */
export interface Hero {
  hero: string;
  religious: string;
  provisions: string;

  maxHp: number;
  maxHpPerRank: number;
  dodge: number;
  dodgePerRank: number;
  protection: number;

  speedLv1: number;
  speedLv2: number;
  speedLv3: number;
  speedLv4: number;
  speedLv5: number;

  critLv1: number;
  critLv2: number;
  critLv3: number;
  critLv4: number;
  critLv5: number;

  damageMinLv1: number;
  damageMinLv2: number;
  damageMinLv3: number;
  damageMinLv4: number;
  damageMinLv5: number;

  damageMaxLv1: number;
  damageMaxLv2: number;
  damageMaxLv3: number;
  damageMaxLv4: number;
  damageMaxLv5: number;

  stunRes: number;
  blightRes: number;
  bleedRes: number;
  diseaseRes: number;
  moveRes: number;
  debuffRes: number;
  deathblowRes: number;
  trapRes: number;
}
