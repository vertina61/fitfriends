import { TrainingType } from "./training-type.enum.js";
import { UserLevelType } from "./user-level-type.enum.js";

export type CustomerType = {
  training_level: UserLevelType;
  training_type: TrainingType;
  training_time: string;
  callories: number;
  callories_in_day: number;
}
