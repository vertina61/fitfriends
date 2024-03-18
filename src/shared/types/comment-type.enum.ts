import { CustomerType } from "./customer-type.enum.js";
import { WorkoutType } from "./workout-type.js";

export type CommentType = {
  user: CustomerType;
  workout: WorkoutType;
  estimation: number;
  text: string;

}
