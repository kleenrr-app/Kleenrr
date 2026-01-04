export type PlowType =
  | "none"
  | "straight"
  | "v_plow"
  | "wing"
  | "skid";

export interface Cleaner {
  id: string;
  name: string;
  phone: string;
  plowType: PlowType;
  hasPlow: boolean;
}
