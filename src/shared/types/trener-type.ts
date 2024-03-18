import { TrainingType } from "./training-type.enum.js";
import { UserLevelType } from "./user-level-type.enum.js";

export type TrenerType = {
  training_level: UserLevelType;
  training_type: TrainingType;
  certificates: string;
  merits: string;
}
