import { GenderWorkoutType } from "./gender-workout-type.enum.js";
import { TrainingType } from "./training-type.enum.js";
import { UserLevelType } from "./user-level-type.enum.js";

export type WorkoutType = {
  title: string;
  image_for_page: string;
  user_level: UserLevelType;
  training_type: TrainingType;
  training_time: string;
  price: number;
  callories: number;
  description: string;
  gender: GenderWorkoutType;
  video: string;
  rating: number;

}
