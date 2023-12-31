import { Material } from "./spreedsheet";

export interface Hero {
  name: string;
  prettyName: string;
  rarity: "SSR" | "SR" | "R" | "N→SSR" | "SR→SSR";
  talent?: Talent;
  threeCostSkill: Skill | null;
  spClass: SPClass | null;
  startingClass: Class;
  factions: Factions[];
  heroImageUrl?: string;
  bondRequirments: BondRequirements | null;
  soldierBonus: SoldierBonus | null;
  exclusiveEquipment: ExclusiveEquipment | null;
  skinCount: number;
  inscription: Inscription;
  skins: Skin[] | null;
  heartBond: HeartBond;
}

export interface RelatedBond {
  prettyName: string;
  name: string;
  text: string;
  type: "ATK" | "DEF";
}
export interface Talent {
  name: string;
  description: string;
  descriptionUrl?: string;
  descriptionMarkdown?: string;
}

export interface Class {
  name: string;
  heroType: UnitType | null;
  skills: Skill[];
  soldiers: string[];
  children: Class[];
  maxStats: HeroStats | null;
  materials: Array<Array<Material>>;
}

export interface SPClass extends Class {
  talent?: Talent;
  soldierBonus: SoldierBonus;
  unlockRequirments: SpUnlockRequirements;
}

export interface SpUnlockRequirements {
  stage1: SPStep[];
  stage2: SPStep[];
}

export interface SPStep {
  name: string;
  requirement: string;
}
export interface Skill {
  name: string;
  description?: string;
  descriptionMarkdown?: string;
  cost: "•" | "••" | "•••";
  cd?: string;
  range?: string;
  span?: string;
}

export interface HeroStats {
  hp: string;
  atk: string;
  int: string;
  def: string;
  mdef: string;
  skill: string;
}

export interface BondRequirements {
  bond2: string;
  bond3: string;
  bond4: string;
  bond5: string;
  bond4Char: string | null;
  bond5Char: string | null;
  relatedBonds: RelatedBond[];
}

export interface SoldierBonus {
  hp: number;
  atk: number;
  def: number;
  mdef: number;
}

export enum Factions {
  Protagonist = "protagonist",
  Glory = "glory",
  Origin = "origin",
  Princess = "princess",
  Empire = "empire",
  Strategic = "strategic",
  Dark = "dark",
  Meteor = "meteor",
  Legends = "legends",
  Mythic = "mythic",
  Tensei = "tensei",
  Time = "time",
}

export enum UnitType {
  Infantry = "Infantry",
  Lancer = "Lancer",
  Cavalry = "Cavalry",
  Flier = "Flier",
  Aquatic = "Aquatic",
  Archer = "Archer",
  Assassin = "Assassin",
  Mage = "Mage",
  Holy = "Holy",
  Demon = "Demon",
  Dragon = "Dragon",
}

export interface Equipment extends BaseEquipment {
  type: EquipmentType;
  effect: EquipmentEffect;
  quality: EquipmentQuality;
  stat1: EquipmentStat | null;
  stat2: EquipmentStat | null;
  classTypes: string[];
  notes: string;
  exclusiveForHero: string | null;
}

export interface ExclusiveEquipment extends BaseEquipment {
  effect: string;
}

interface BaseEquipment {
  name: string;
  slot: EquipmentSlot;
}
export interface EquipmentStat extends EquipmentLevelBased {
  type: string;
}
export interface EquipmentEffect extends EquipmentLevelBased {}

interface EquipmentLevelBased {
  lvl1: string;
  lvl10: string;
  lvl20: string;
  lvl30: string;
  lvl40: string;
  lvl50: string;
}

export enum EquipmentSlot {
  Weapon = "Weapon",
  Body = "Body",
  Head = "Head",
  Accessory = "Accessory",
}

export enum EquipmentQuality {
  SSR = "SSR",
  EXCLUSIVE = "Exclusive",
}

export type EquipmentType =
  | "Bow"
  | "Dagger"
  | "Sword"
  | "Axe"
  | "Lance"
  | "Hammer"
  | "Staff"
  | "Cloth"
  | "Leather"
  | "Heavy"
  | "Special"
  | "";

export interface Soldier {
  name: string;
  tier: number;
  type: UnitType;
  effect: string;
  move: number;
  range: number;
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  baseMdef: number;
  trainingSkill: TrainingSkill | null;
  moveType: string;
  relatedHeroes: string[];
}

export interface TrainingSkillMap {
  [key: string]: TrainingSkill;
}

export interface TrainingSkill {
  name: string;
  text: string;
  type: keyof typeof prettyAnikiTypes;
  levels: TrainingSkillLevel[];
}

export const prettyAnikiTypes = {
  Infantry: "infantry",
  Lancer: "lancer",
  Cavalry: "cavalry",
  "Flier/Aquatic": "flier",
  "Archer/Assassin": "archer",
  "Holy/Mage/Demon": "holy",
};

export interface TrainingSkillLevel {
  level: string;
  modX: string | null;
  modY: string | null;
  modZ: string | null;
  gold: string;
  books: TrainingMaterial[];
  materials: TrainingMaterial[];
}

export interface TrainingMaterial {
  name: string;
  count: string;
}

export interface Inscription {
  weaponStat: string;
  weapon1: string;
  weapon2: string;
  armor: string;
  helm: string;
  skillName?: string;
  skillEffect?: string;
}

export interface SkinsMap {
  [key: string]: Skin[];
}

export interface Skin {
  index: string;
  name: string | null;
  source: string | null;
  cost: string | null;
  notes: string | null;
}

export interface HeartBond {
  lvl4: string | null;
  lvl7: string | null;
}
